import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IActionResponse } from 'src/app/shared/interfaces/action/action-interface';
import { ActionService } from 'src/app/shared/services/action/action.service';
import {
  ref,
  Storage,
  percentage,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from '@angular/fire/storage';

@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.scss'],
})
export class AdminActionComponent {
  public adminActions: Array<IActionResponse> = [];
  public actionForm!: FormGroup;
  public isOpen = false;
  public isModal = false;
  public editStatus = false;
  private currentActionId = 0;
  public uploadPercent!: number;
  public isUploaded = false;

  constructor(
    private fb: FormBuilder,
    private actionService: ActionService,
    private storage: Storage
  ) {}
  ngOnInit(): void {
    this.initActionForm();
    this.loadActions();
  }

  addAction(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.isModal = true;
    } else {
      this.isModal = false;
    }

    this.uploadPercent = 0;
  }

  initActionForm(): void {
    this.actionForm = this.fb.group({
      date: new Date(),
      name: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],

      imagePath: ['', Validators.required],
    });
  }

  loadActions(): void {
    this.actionService.getAll().subscribe((data) => {
      this.adminActions = data;
    });
  }

  editAction(action: IActionResponse): void {
    this.actionForm.patchValue({
      date: action.date,
      name: action.name,
      title: action.title,
      description: action.description,
      imagePath: action.imagePath,
    });

    this.currentActionId = action.id;
    this.editStatus = true;
    this.isModal = true;
    this.isUploaded = true;
    this.uploadPercent = 0;
  }
  saveAction(): void {
    if (this.editStatus) {
      this.actionService
        .update(this.actionForm.value, this.currentActionId)
        .subscribe(() => {
          this.loadActions();
        });
      this.isModal = false;
    } else {
      this.actionService.create(this.actionForm.value).subscribe(() => {
        this.loadActions();
      });
    }
    this.actionForm.reset();
    this.editStatus = false;
    this.isUploaded = false;

    this.uploadPercent = 0;
  }

  deleteAction(action: IActionResponse): void {
    this.actionService.delete(action.id).subscribe(() => {
      this.loadActions();
    });
  }
  upload(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('images', file.name, file)
      .then((data) => {
        this.actionForm.patchValue({
          imagePath: data,
        });
        this.isUploaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async uploadFile(
    folder: string,
    name: string,
    file: File | null
  ): Promise<string> {
    const path = `${folder}/${name}`;
    let url = '';
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        percentage(task).subscribe((data) => {
          this.uploadPercent = data.progress;
        });
        await task;
        url = await getDownloadURL(storageRef);
      } catch (e: any) {
        console.error(e);
      }
    } else {
      console.log('wrong format');
    }
    return Promise.resolve(url);
  }

  deleteImage(): void {
    const task = ref(this.storage, this.valueByControl('imagePath'));
    deleteObject(task).then(() => {
      console.log('File deleted');
      this.isUploaded = false;
      this.uploadPercent = 0;
      this.actionForm.patchValue({
        imagePath: null,
      });
    });
  }

  valueByControl(control: string): string {
    return this.actionForm.get(control)?.value;
  }
}

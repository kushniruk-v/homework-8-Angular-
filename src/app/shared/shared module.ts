import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


const MATIRIAL =[
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
]
// Other modules

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[],
    imports:[
        ...MATIRIAL,
      FormsModule,
      ReactiveFormsModule,

    ],
    exports:[
        ...MATIRIAL,
      FormsModule,
      ReactiveFormsModule,


    ]
})
export class SharedModule{ }

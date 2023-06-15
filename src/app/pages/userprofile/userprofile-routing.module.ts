import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PasswordChangeComponent } from './password-change/password-change.component';




const routes: Routes = [
  {
    path: '',component:UserprofileComponent,
    children:[
      {path:'personal-data', component:PersonalDataComponent},
      {path:'order-history', component:OrderHistoryComponent},
      {path:'password-change', component:PasswordChangeComponent},
      { path: '', pathMatch: 'full', redirectTo: 'personal-data' },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprofileRoutingModule {}

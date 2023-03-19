import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { ProductComponent } from './pages/product/product.component';
import { DostavkaTaOplataComponent } from './pages/dostavka-ta-oplata/dostavka-ta-oplata.component';
import { AboutComponent } from './pages/about/about.component';


import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminActionComponent } from './admin/admin-action/admin-action.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'actions',component:ActionsComponent},
  {path:'product-category/:category',component:ProductComponent},
  {path:'dostavka-ta-oplata',component:DostavkaTaOplataComponent},
  {path:'about-us',component:AboutComponent},
  { path: 'admin', component: AdminComponent, children: [
    { path: 'category', component: AdminCategoryComponent },
    { path: 'action', component:AdminActionComponent },
    
    { path: '', pathMatch: 'full', redirectTo: 'action' }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

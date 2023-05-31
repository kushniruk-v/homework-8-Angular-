import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';


import { DostavkaTaOplataComponent } from './pages/dostavka-ta-oplata/dostavka-ta-oplata.component';
import { AboutComponent } from './pages/about/about.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminActionComponent } from './admin/admin-action/admin-action.component';
import { AdminComponent } from './admin/admin.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { AdminTovaryComponent } from './admin/admin-tovary/admin-tovary.component';
import { TovaryComponent } from './pages/tovary/tovary.component';
import { TovaryInfoComponent } from './pages/tovary-info/tovary-info.component';
import { ActionInfoComponent } from './pages/action-info/action-info.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { SharedModule } from './shared/shared module';
import { PersonalDataComponent } from './pages/userprofile/personal-data/personal-data.component';
import { OrderHistoryComponent } from './pages/userprofile/order-history/order-history.component';
import { BasketDialogComponent } from './pages/basket-dialog/basket-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DostavkaTaOplataComponent,
    AboutComponent,
 
    ActionsComponent,
       AdminCategoryComponent,
       AdminActionComponent,
       AdminComponent,
       AdminTovaryComponent,
       TovaryComponent,
       TovaryInfoComponent,
       ActionInfoComponent,
       AuthorizationComponent,
       UserprofileComponent,
       AuthDialogComponent,
       PersonalDataComponent,
       OrderHistoryComponent,
       BasketDialogComponent,
       
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth()),
    BrowserAnimationsModule,
    SharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

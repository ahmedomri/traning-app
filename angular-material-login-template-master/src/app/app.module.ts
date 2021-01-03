import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/*firebase */
import {AngularFireModule} from '@angular/fire';
import { FirebaseService } from './services/firebase.service';


/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DialogElementsExampleDialogComponent } from './components/dialog-elements-example-dialog/dialog-elements-example-dialog.component';


var firebaseConfig = {
  apiKey: "AIzaSyDHMVQDlgGyvtZFuWMxG1t5gIwXtXlxrC0",
  authDomain: "trainingapp-f27e4.firebaseapp.com",
  projectId: "trainingapp-f27e4",
  storageBucket: "trainingapp-f27e4.appspot.com",
  messagingSenderId: "824340661567",
  appId: "1:824340661567:web:b714770708ac086a52bf8a"
};

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    HomeComponent,
    DialogElementsExampleDialogComponent
  ],
  entryComponents: [DialogElementsExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
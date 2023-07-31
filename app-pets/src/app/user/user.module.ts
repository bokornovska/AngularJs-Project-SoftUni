import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSnackBarModule
  ]
})
export class UserModule { }

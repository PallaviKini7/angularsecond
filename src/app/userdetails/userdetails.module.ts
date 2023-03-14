import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsRoutingModule } from './userdetails-routing.module';
import { LoginComponent } from '../userdetails/login/login.component';
import { RegisterComponent } from '../userdetails/register/register.component';
import { ProfileComponent } from '../userdetails/profile/profile.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    UserdetailsRoutingModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    BrowserAnimationsModule
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class UserdetailsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './userdetails/login/login.component';
import { RegisterComponent } from './userdetails/register/register.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

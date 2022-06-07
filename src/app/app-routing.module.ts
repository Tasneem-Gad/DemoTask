import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Layout/home-page/home-page.component';
import { LoginComponent } from './User/login/login.component';

const routes: Routes = [
  {path: 'Home', component:HomePageComponent},
  {path: 'Login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

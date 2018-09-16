import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
{ path: '',
  loadChildren: './feature/acnologin/acnologin.module#AcnologinModule'
},
{
  path: 'noti',
  loadChildren: './feature/acnoti/acnoti.module#AcnotiModule'
},/*
  {
    path: 'authorise',
    loadChildren: './authorise/authorise.module#AuthoriseModule'
  },
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
},
{
  path: 'secure',
  //canLoad: [AuthGuardService],
  loadChildren: './postlogin/postlogin.module#PostloginModule'
},*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

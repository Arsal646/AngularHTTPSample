import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate : [AuthGuard]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

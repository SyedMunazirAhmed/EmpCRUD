import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationExtras } from '@angular/router';
import { EmpTableComponent } from './MyComponents/emp-table/emp-table.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { LayoutComponent } from './MyComponents/layout/layout.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'table', component: EmpTableComponent , canActivate:[authGuard]},
      { path: 'view/:id', component: EmployeeDetailsComponent , canActivate:[authGuard] },
      { path: '', component: DashboardComponent },
    ],
  },
  { path: '', redirectTo:'layout/dashboard',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path:'**', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

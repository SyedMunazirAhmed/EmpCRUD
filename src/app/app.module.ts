import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpTableComponent } from './MyComponents/emp-table/emp-table.component';
import { EmpAddComponent } from './MyComponents/emp-add/emp-add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpDeleteComponent } from './MyComponents/emp-delete/emp-delete.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { LoginComponent } from './MyComponents/login/login.component'
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { LayoutComponent } from './MyComponents/layout/layout.component'; 
import { InterecptorsService } from './interecptors.service';
import { TableComponent } from './MyComponents/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpTableComponent,
    EmpAddComponent,
    EmpDeleteComponent,
    DashboardComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    LayoutComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:InterecptorsService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

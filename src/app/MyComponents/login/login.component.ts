import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emp } from 'src/app/Emp';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emp!: Emp;
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private router: Router,
    private _EmpService: EmployeeService
  ) {
    this._EmpService.getEmployee().subscribe((result) => {
      this.emp = result;
    });
  }

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('userDetails');
    if (loggedIn) {
      this.router.navigate(['layout']);
    }
  }

  loginSubmit(username: string, password: string) {
    this._EmpService.validateCredentials(username).subscribe(
      (response) => {
        localStorage.setItem('userDetails', JSON.stringify(response));
        if (response.password == password) {
          this.router.navigate(['layout/dashboard']);
        } else {
          alert('Invalid Credentials');
        }
      },
      (error) => {
        console.error('Login failed', error);
        alert('Invalid Credentials');
      }
    );
  }
}

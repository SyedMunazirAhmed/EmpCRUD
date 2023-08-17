import { Component, Input, OnInit } from '@angular/core';
import { Emp } from 'src/app/Emp';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  @Input() employeeId!: number;
  detail!: Emp;
  constructor(
    private _EmpService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let ref = +this.route.snapshot.paramMap.get('id')!;
    this._EmpService.getEmployeeDetail(ref).subscribe((result) => {
      this.detail = result;
    });
  }
}

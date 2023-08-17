import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Emp } from '../../Emp';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpAddComponent } from '../emp-add/emp-add.component';
import { EmpDeleteComponent } from '../emp-delete/emp-delete.component';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { TableConfig } from 'src/app/TableConfig';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css'],
})

export class EmpTableComponent implements OnInit {
  @Input() employee!: Emp;
  @Output() employeeEdit: EventEmitter<Emp> = new EventEmitter();
  @Output() employeeDetails: EventEmitter<Emp> = new EventEmitter();
  @Input() actData!: Emp;
  @Input() actMsg!: any;
  ans!: Emp;
  localItem!: string | null;
  emp: Emp[] = [];
  EmpToEdit!: Emp;
  flag!: boolean;
  empId!: number;
  tableConfig!: TableConfig;
  constructor(
    private modalService: NgbModal,
    private _EmpService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.tableConfig = {
      columns: [
        {
          title: 'Employee Id',
          dataProperty: 'id',
          dataType: 'string',
          sortable: true,
          conditionToShow: true,
          exportable: true,
        },
        {
          title: 'Employee Name',
          dataProperty: 'name',
          dataType: 'string',
          sortable: true,
          conditionToShow: true,
          exportable: true,
        },
        {
          title: 'Employee Email',
          dataProperty: 'email',
          dataType: 'string',
          sortable: true,
          conditionToShow: true,
          exportable: true,
        },
        {
          title: 'Phone',
          dataProperty: 'phone',
          dataType: 'string',
          sortable: true,
          conditionToShow: true,
          exportable: true,
        },
        {
          title: 'Actions',
          dataProperty: 'action',
          dataType: 'number',
          sortable: true,
          conditionToShow: true,
          exportable: true,
        },
      ],
    };
  }

  getData(rowData: Emp) {
    this.ans = rowData;
  }
  checkdata(res: string) {
    if (res == 'delete') {
      this.deleteOnClick(this.ans);
    }
    if (res == 'edit') {
      this.open(this.ans);
    } else if (res == 'getDetails') {
      this.empDetails(this.ans);
    }
  }

  getEmployees() {
    this._EmpService.getEmployee().subscribe((result) => {
      this.emp = result;
    });
  }

  //Delete Data
  deleteOnClick(employee: Emp) {
    const modelRef = this.modalService.open(EmpDeleteComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    modelRef.closed.subscribe((result) => {
      if (result == 'Confirmed') {
        const refId = employee.id;
        this._EmpService.deleteEmployee(refId).subscribe(() => {
          this.getEmployees();
        });
      }
    });
  }

  //View Details
  empDetails(data: Emp) {
    this.router.navigate(['layout/view', data.id]);
  }

  //Edit
  open(data: Emp | '') {
    const modelRef = this.modalService.open(EmpAddComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    if (data) {
      modelRef.componentInstance.isEdit = true;
    } else {
      modelRef.componentInstance.isEdit = false;
    }
    modelRef.componentInstance.edit = data;

    modelRef.closed.subscribe((result) => {
      if (result) {
        for (let i = 0; i < this.emp.length; i++) {
          if (this.emp[i].id == Object.values(data)[0]) {
            this.emp[i] = result;
            this.flag = true;
          }
        }
        if (!this.flag) this.emp.push(result);
        this._EmpService.editEmployee(result.id, result).subscribe(() => {
          this.getEmployees();
        });
        this.flag = false;
      }
    });
  }
}

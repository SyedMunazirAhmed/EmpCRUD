import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Emp } from '../../Emp';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css'],
})
export class EmpAddComponent implements OnInit {
  @Input() edit!: any;
  @Input() isEdit!: boolean;
  @Output() employeeAdd: EventEmitter<Emp> = new EventEmitter();

  title: string = 'Add Employee';
  employee!: Emp[];
  id!: number;
  name!: string;
  email!: string;
  phone!: number;
  EmpForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private _EmpServise: EmployeeService
  ) {}

  ngOnInit(): void {
    this.EmpForm = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl(),
    });

    if (this.isEdit) {
      this.EmpForm.get('id')?.setValidators([Validators.required]);
      this.title = 'Edit Employee';
      this.EmpForm.patchValue({
        id: this.edit.id,
        name: this.edit.name,
        email: this.edit.email,
        phone: this.edit.phone,
      });
    }
  }

  onSubmit(form: any) {
    const emp = {
      id: this.EmpForm.value.id,
      name: this.EmpForm.value.name,
      email: this.EmpForm.value.email,
      phone: this.EmpForm.value.phone,
    };
    this._EmpServise.addEmployee(this.EmpForm.value).subscribe(() => {});
    this.employeeAdd.emit(emp);
    form.form.reset();
    this.activeModal.close(emp);
  }

  dismiss() {
    this.activeModal.close();
  }
}

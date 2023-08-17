import { Component , Output ,EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.css']
})

export class EmpDeleteComponent {

  constructor(public activeModal: NgbActiveModal  ){ }
  
  confirmDel(){
    this.activeModal.close("Confirmed");
  }

  dismiss(){
    this.activeModal.close();
  }
}
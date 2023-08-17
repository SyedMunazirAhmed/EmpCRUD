import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Emp } from 'src/app/Emp';
import { TableConfig } from 'src/app/TableConfig';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output() actData: EventEmitter<Emp> = new EventEmitter();
  @Output() actMsg: EventEmitter<string> = new EventEmitter();
  @Input() tableconfig!: TableConfig;
  @Input() tableData!: any;

  ngOnInit() {}
  action(msg: string, data: Emp) {
    this.actData.emit(data);
    this.actMsg.emit(msg);
  }
}

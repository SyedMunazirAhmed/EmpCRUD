import { Component } from '@angular/core';
import { User } from 'src/app/User';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userDetails: User[];
  localItem: string | null;
  userId: any;
  userName: any;
  userPassword: any;
  constructor() {
    this.localItem = localStorage.getItem('userDetails');
    if (this.localItem == null) {
      this.userDetails = [];
    } else this.userDetails = JSON.parse(this.localItem);
    this.userId = Object.values(this.userDetails)[0];
    this.userName = Object.values(this.userDetails)[1];
    this.userPassword = Object.values(this.userDetails)[2];
  }
}

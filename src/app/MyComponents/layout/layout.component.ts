import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  title!: string;
  isSidebarOpen = false;
  IsAdmin: boolean = true;
  userId!: any;
  userDetails: User[];
  localItem: string | null;
  constructor(private router: Router) {
    this.title = 'Employee CRUD';
    const data = localStorage.getItem('userDetails');
    if (!data) {
      this.router.navigate(['/login']);
    }
    this.localItem = localStorage.getItem('userDetails');

    if (this.localItem == null) {
      this.userDetails = [];
    } else {
      this.userDetails = JSON.parse(this.localItem);
    }

    this.userId = Object.values(this.userDetails)[0];
    if (this.userId !== 'admin@gmail.com') {
      this.IsAdmin = false;
    }
  }
  ngOnInit() {}
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logout() {
    console.log('logging Out');
    localStorage.removeItem('userDetails');
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  
  public users: any;

  constructor(private userServic: UserService) {}

  ngOnInit() {
    this.userServic.getAllUsers().subscribe((data) => {
      this.users= data;   
    });
  }
}

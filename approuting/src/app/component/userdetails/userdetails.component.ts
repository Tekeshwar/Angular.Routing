import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  public users!: User;

  constructor(private rout: ActivatedRoute, private userSer: UserService) {}

  ngOnInit() {
    let id = this.rout.snapshot.params['id'];
    this.userSer.getUsers(id).subscribe((data)=>{
      this.users= data;
    });
  }
}

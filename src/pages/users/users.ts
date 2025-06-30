import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {User, UsersService} from './users.service';
import {CardUser} from '../../shared/ui/card-user/card-user';

@Component({
  selector: 'app-users',
  imports: [
    CardUser
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  constructor(private cd: ChangeDetectorRef) {
  }

  users: User[] = []
  service = inject(UsersService);

  ngOnInit() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
      this.cd.detectChanges()
    });
  }
}

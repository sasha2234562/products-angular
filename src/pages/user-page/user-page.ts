import {Component, OnInit} from '@angular/core';
import {UserPageService} from './user-page.service';
import {User} from '../users/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css'
})
export class UserPage implements OnInit {
  constructor(private service: UserPageService, private route: ActivatedRoute) {
  }

  user: User = {} as User;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.service.getUser(+id).subscribe(res => this.user = res)
      }
    })
  }
}

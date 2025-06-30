import {Component, Input} from '@angular/core';
import {User} from '../../../pages/users/users.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-user',
  imports: [
    RouterLink
  ],
  templateUrl: './card-user.html',
  styleUrl: './card-user.css'
})
export class CardUser {
  constructor() {
  }

  @Input() user!: User;

}

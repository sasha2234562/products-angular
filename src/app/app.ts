import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Header} from '../feature/header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet, Header],
  changeDetection: ChangeDetectionStrategy.Default
})
export class App {
}

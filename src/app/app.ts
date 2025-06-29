import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Main} from '../pages/main/main';

@Component({
  selector: 'app-root', // Должен быть только один селектор
  templateUrl: './app.html', // Путь к основному шаблону
  styleUrls: ['./app.css'], // Может быть массивом (styleUrls вместо styleUrl)
  standalone: true, // Для standalone компонента
  imports: [MatCardModule, MatButtonModule, RouterOutlet, Main],
  changeDetection: ChangeDetectionStrategy.Default
})
export class App {

}

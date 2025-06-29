import {Component, Input} from '@angular/core';
import {Product} from '../../../pages/main/service';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardImage,
    RouterLink
  ],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css'
})
export class CardProduct{
  @Input() cardProduct: Product = {} as Product;

}

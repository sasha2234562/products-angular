import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../pages/products/service';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    RouterLink
  ],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css'
})
export class CardProduct {
  @Input() cardProduct: Product = {} as Product;
  @Output() changeCheckboxCard: EventEmitter<boolean> = new EventEmitter<boolean>();


  changeCheckbox(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.changeCheckboxCard.emit(isChecked);
  }
}

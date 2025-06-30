import {ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CardService, Product} from './service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime} from 'rxjs';
import {MatFormField, MatInput} from '@angular/material/input';
import {CardProduct} from '../../shared/ui/card-product/card-product';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-main',
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormField,
    MatInput,
    MatFormField,
    CardProduct,
    MatButton
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class Products implements OnInit {
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor(private cd: ChangeDetectorRef) {
  }

  searchInput = new FormControl('');
  childService = inject(CardService);
  form: FormGroup = new FormGroup({
    searchInput: new FormControl(null)
  });

  ngOnInit() {
    this.childService.getProducts().subscribe(res => {
      this.products = res;
      this.productsFilter = res;
      this.cd.detectChanges();
    });

    this.searchInput.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        if (!value) {
          this.productsFilter = this.products;
        } else {
          this.productsFilter = this.products.filter(item => {
            return item.title.toLowerCase().startsWith(value.toLowerCase())
          })
        }
        console.log('Search term:', value);
        this.cd.detectChanges();
      });
  }

  resetSearch() {
    this.productsFilter = this.products;
    this.searchInput.reset();
  }

  count = 0

  changeCheckboxCard(value: boolean) {
    if (value) {
      this.count = this.count + 1;
    } else {
      this.count = this.count - 1;
    }
  }
}

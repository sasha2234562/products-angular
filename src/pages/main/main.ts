import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {CardService, Product} from './service';
import {CardProduct} from '../../shared/ui/card-product/card-product';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-main',
  imports: [
    CardProduct,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatFormField,
    MatButton,
    MatProgressSpinnerModule
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor(private cd: ChangeDetectorRef) {
  }

  form: FormGroup = new FormGroup({
    search: new FormControl(null)
  });
  childService = inject(CardService);

  ngOnInit() {
    this.childService.getProducts().subscribe(res => {
      this.products = res;
      this.productsFilter = res;
      this.cd.detectChanges();
    });
  }

  onSubmit(): void {
    if(!this.form.value.search){
      this.productsFilter = this.products;
    }
    this.productsFilter = this.products.filter(
      item =>
        item.title.toLowerCase().startsWith(this.form.value.search.toLowerCase()))
  }
  resetSearch(){
    this.productsFilter = this.products;
    this.form.reset()
  }
}

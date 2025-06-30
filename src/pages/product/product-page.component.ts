import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from '../products/service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPage implements OnInit {
  constructor(private cd: ChangeDetectorRef, private route: ActivatedRoute ) {
  }
  service = inject(ProductService);
  product: Product = {} as Product;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.service.getProduct(2).subscribe(res => {
          this.product = res;
          this.cd.detectChanges();
        })
      }
    })
  }
}

import {Routes} from '@angular/router';
import {Main} from '../pages/main/main';
import {ProductPage} from '../pages/product/product-page.component';

export const routes: Routes = [
  {path: '', component: Main},
  {path: 'product/:id', component: ProductPage}
];

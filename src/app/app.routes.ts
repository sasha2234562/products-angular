import {Routes} from '@angular/router';
import {Products} from '../pages/products/products.component';
import {ProductPage} from '../pages/product/product-page.component';
import {Users} from '../pages/users/users';
import {UserPage} from '../pages/user-page/user-page';

export const routes: Routes = [
  {path: '', component: Products},
  {path: 'product/:id', component: ProductPage},
  {path: 'users', component: Users},
  {path: 'user/:id', component: UserPage},
];

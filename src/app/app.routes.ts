import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];

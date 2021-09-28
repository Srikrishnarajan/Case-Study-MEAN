import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from './service/auth.guard';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'coupons',
    canActivate: [AuthGuard], component: CouponsComponent
  },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CouponsComponent, ProductsComponent, AboutComponent, CartComponent, LoginComponent, RegisterComponent]

import { Routes } from '@angular/router';



import { NotfoundComponent } from './pages/notfound/notfound.component';
import { gurdcomponetsGuard } from './shred/gaurd/gurdcomponets.guard';
import { gaurdregesterGuard } from './shred/gaurd/gaurdregester.guard';
import { tick } from '@angular/core/testing';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('../app/pages/home/home.component').then((c) => c.HomeComponent),
    canActivate: [gurdcomponetsGuard],title:'home'
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('../app/pages/cart/cart.component').then((c) => c.CartComponent),
    canActivate: [gurdcomponetsGuard],title:'cart'
  },
  {
    path: 'cheackout/:cartid',
    loadComponent: () =>
      import('../app/pages/cheackout/cheackout.component').then(
        (c) => c.CheackoutComponent
      ),
    canActivate: [gurdcomponetsGuard],title:'cheackout'
  },

  {
    path: 'whishlist',
    loadComponent: () =>
      import('../app/pages/whishlist/whishlist.component').then(
        (c) => c.WhishlistComponent
      ),
    canActivate: [gurdcomponetsGuard],title:'whishlist'
  },
  {
    path: 'product',
    loadComponent: () =>
      import('../app/pages/products/products.component').then(
        (c) => c.ProductsComponent
      ),
    canActivate: [gurdcomponetsGuard],title:'product'
  },
  {
    path: 'productdetails/:id',
    loadComponent: () =>
      import('../app/pages/productsdetails/productsdetails.component').then(
        (c) => c.ProductsdetailsComponent
      ),
    canActivate: [gurdcomponetsGuard],title:'productdetails'
  },

  {
    path: 'categories',
    loadComponent: () =>
      import('../app/pages/gategories/gategories.component').then(
        (c) => c.GategoriesComponent
      ),
    canActivate: [gurdcomponetsGuard],title:'categories'
  },
  {
    path: 'gategoriesdetails/:id',
    loadComponent: () =>
      import(
        '../app/pages/home/componets/gategoriesdetails/gategoriesdetails.component'
      ).then((c) => c.GategoriesdetailsComponent),
    canActivate: [gurdcomponetsGuard],title:'gategoriesdetails'
  },

  {
    path: 'brand',
    loadComponent: () =>
      import('../app/pages/brands/brands.component').then(
        (c) => c.BrandsComponent
      ),
    canActivate: [gurdcomponetsGuard],title:'brand'
  },
  {
    path: 'branddetails/:id',
    loadComponent: () =>
      import('../app/pages/brands/branddetails/branddetails.component').then(
        (c) => c.BranddetailsComponent
      ),
    canActivate: [gurdcomponetsGuard],title:"branddetails"
  },

  {
    path: 'allorders',
    loadComponent: () =>
      import('../app/pages/order/order.component').then(
        (c) => c.OrderComponent
      ),
    canActivate: [gurdcomponetsGuard],title:"allorders"
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canActivate: [gaurdregesterGuard],title:'login'
  },

  {
    path: 'forgetpass',
    loadComponent: () =>
      import('./core/pages/forgetpass/forgetpass.component').then(
        (c) => c.ForgetpassComponent
      ),
    canActivate: [gaurdregesterGuard],title:"forgetpass"
  },

  {
    path: 'regester',
    loadComponent: () =>
      import('./core/pages/regester/regester.component').then(
        (c) => c.RegesterComponent
      ),
    canActivate: [gaurdregesterGuard],title:'regester'
  },
  { path: '**', component: NotfoundComponent },
];

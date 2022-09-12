import { Injectable } from '@angular/core';
import { productsModel } from '../product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart: productsModel = [];
  total: number = 0;

  constructor(private productService: ProductService) { }

  add(p_id: number) {
    console.log('Add product id: ' + p_id + ' to cart');
    if (this.productService.getProd(p_id).quantity <= 0)
      return;
  
    this.productService.getProd(p_id).quantity--;
    this.cart.push(this.productService.getProd(p_id));
    this.total += this.productService.getProd(p_id).price;
  }

  getCounter() {
    return this.cart.length;
  }

  getTotal() {
    return this.total;
  }

  getCart() {
    return this.cart;
  }
}

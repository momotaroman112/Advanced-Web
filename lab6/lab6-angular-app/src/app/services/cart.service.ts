import { Injectable } from '@angular/core';
import { ProductsService } from './productsts.service';
import { productsType } from '../products.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter : number = 0 ;
  sumPrice : number = 0 ;
  cart : productsType = []

  constructor(
    private protectsService: ProductsService,
  ) { }

  add(p_id : number){
    console.log('Add product id: '+p_id+' to cart');
    this.cart.push(this.protectsService.getSomeProduct(p_id));
    this.sumPrice += this.protectsService.getSomeProduct(p_id).p_price;
    this.counter = this.cart.length;
  }

  getCounter(){
    return this.counter
  }

  getsumPrice(){
    return this.sumPrice
  }

  getCart(){
    return this.cart
  }

}
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  getAllProduct() {
    return this.productService.getAllProd();
  }
  addToCart(p_id: number){
    this.cartService.add(p_id);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
   type: new FormControl(''),
    id : new FormControl('',[Validators.required]),
   name : new FormControl('',[Validators.required]),
   detail: new FormControl(''),
   quantity: new FormControl('',[Validators.required,Validators.min(1),Validators.max(50)]),
    price: new FormControl('',[Validators.required,Validators.min(1),Validators.max(100000)]),
    
    
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  get check() {return this.productForm.controls}

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    if (this.productForm.status === "INVALID"){
      alert('Add product to database fail');
      return;
    }
    this.productService.getAllProd().push({
      type: this.productForm.get('type')?.value as string,
      id : this.productForm.get('id')?.value as string,
      name : this.productForm.get('name')?.value as string,
      detail : this.productForm.get('detail')?.value as string,
      quantity : Number(this.productForm.get('quantity')?.value),
      price : Number(this.productForm.get('price')?.value)
    })

    alert('Add product to database successfully')
  }

}

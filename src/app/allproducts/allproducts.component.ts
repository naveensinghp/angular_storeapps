import { Component,OnInit } from '@angular/core';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
count : number = 0;
  constructor() { }

  ngOnInit() {
  }

  cartPage():void{
  let tt = this.count++;
  console.log(tt);
  }

}

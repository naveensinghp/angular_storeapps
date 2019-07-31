import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  selectedDay: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(this.selectedDay);
  }

 
  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      console.log(params);
      let id = +params.get('id');
      console.log(id);

    });
  }

  public categorys = [
    { "id":1, "name":"All" },
    { "id":2, "name":"large" },
    { "id":3, "name":"small" }
  ];

  onSelect(event: any){

  }
  discount = [
    { "id":1, "discount" : "10%"},
    { "id":2, "discount" : "30%"},
    { "id":3, "discount" : "40%"},
    { "id":4, "discount" : "50%"},
    { "id":5, "discount" : "75%"}

  ]
}

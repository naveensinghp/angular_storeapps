import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"; 


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  category: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.category = event.target.value;
    //console.log(this.category);
    this.router.navigate(['/products'], {queryParams:{category: this.category}});
  }

 
  constructor( private router : Router,private route : ActivatedRoute, private spinner: NgxSpinnerService) { }



  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    
    // this.route.paramMap.subscribe(params => {

    
    //   let id = +params.get('id');
    //   console.log(id);

    // });
    console.log( this.route.snapshot.queryParamMap.has('category'));
    console.log( this.route.snapshot.queryParamMap.get('category'));
    console.log( this.route.snapshot.queryParamMap.getAll('category'));
    console.log( this.route.snapshot.queryParamMap.keys);
    console.log( this.route.snapshot.queryParams.keys);
  }

  public categorys = [
    { "id":1, "name":"All" },
    { "id":2, "name":"large" },
    { "id":3, "name":"small" }
  ];

  onSelect(categorys : string ){

    this.router.navigate(['/products'], {queryParams:{category: this.categorys}});
    
  }
  
  discount = [
    { "id":1, "discount" : "10%"},
    { "id":2, "discount" : "30%"},
    { "id":3, "discount" : "40%"},
    { "id":4, "discount" : "50%"},
    { "id":5, "discount" : "75%"}

  ]
}

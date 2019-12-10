import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material'
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { Options, LabelType } from 'ng5-slider';
import { PRODUCT } from '../mockup-product';







@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  producttitle = PRODUCT;
  category: string = '';
  product1: string = 'Hangout StoreTesting';
  default: string = 'Alls';
  // Price Range Slider
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 1500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    }
  };



 checked = false;


  selectChangeHandler (event: any) {

    this.category = event.target.value;
    console.log(this.category);
     this.router.navigate(['/products'],
       {queryParams: {category: this.category}

       });
  }

  resetBtn(){
    if(this.category == 'Hagouts Meet Hardware'){
      let cc = this.category = 'All';
      console.log(cc);
    }
  }

  allProductPage()
  {

    this.router.navigate(['/products/category/hangout-meet-hardware'])
  }
  onSelectt(event: any)
  {

    let dbdiscount = event.target.value;
    this.router.navigate(['/products'], {queryParams: { discount: dbdiscount } } );
    //console.log(event.target.id);
  }
  onSelectRam(event: any){
    //console.log(event.target.value);
    let dbram = event.target.value;

  }

  selectProcessor(event: any)
  {
    //console.log(event.target.value);
  }
  selectResolution(event: any)
  {
    //console.log(event.target.value);
  }
  onselectStorage(event: any)
  {
    //console.log(event.target.value);
  }
  onselectManfucture(event: any)
  {
    //console.log(event.target.value);
  }


  constructor(
    public dialog:MatDialog,
    private router : Router,
    private route : ActivatedRoute,
    private spinner: NgxSpinnerService

    ) { }

reset()
{
  this.default;
}

openDialog(){
  this.dialog.open( DialogPageComponent);

}



  ngOnInit() {

    // this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 1000);

     //this.route.paramMap.subscribe(params => {


       //let id = +params.get('id');
       //console.log(id);

     //});

     if(this.route.snapshot.paramMap.has('category')){
           this.category = this.route.snapshot.queryParams.get('category');

     }else {
       this.discount;
     }

     //console.log( this.route.snapshot.queryParamMap.has('category'));
     //console.log( this.route.snapshot.queryParamMap.get('category'));
     //console.log( this.route.snapshot.queryParamMap.getAll('category'));
     //console.log( this.route.snapshot.queryParamMap.keys);
     //console.log( this.route.snapshot.queryParams.keys);
     //console.log( this.route.snapshot.paramMap.keys);
  }

  public categorys = [
    { "id":1, "name":"All" },
    { "id":2, "name":"Hagouts Meet Hardware" }
  ];


  public ram=[

   { "id":1, "value":"All" },
   { "id":2, "value":"2GB" },
   { "id":3, "value":"4GB" },
   { "id":4, "value":"16GB" }

  ];

  public discount = [

   { "id":1, "value":"All" },
   { "id":2, "value":'3"' },
   { "id":3, "value":'4.3"' },
   { "id":4, "value":'10.1"' },
   { "id":5, "value":'11.6"' },
   { "id":6, "value":'13.3"' },
   { "id":7, "value":'15.6"' },
   { "id":8, "value":'21.5"' },
   { "id":9, "value":'23.8"' }

  ];

  public processor = [

  { "id":1, "value":"All" },
  { "id":2, "value":"Intel" },
  { "id":3, "value":"NVIDA" },
  { "id":4, "value":"Rockship" },


  ];

  public resolution = [

  { "id":1, "value":"All" },
  { "id":2, "value":"1280 x 800" },
  { "id":3, "value":"1366 x 768" },
  { "id":4, "value":"1920 x 1080" },
  { "id":5, "value":"3200 x 1800" }

  ];


  public storage = [

  { "id":1, "value":"All" },
  { "id":2, "value":"16GB" },
  { "id":3, "value":"32GB" }

  ];


  public manufacturer = [

  { "id":1, "value":"All" },
  { "id":2, "value":"Acer" },
  { "id":3, "value":"AOPEN" },
  { "id":4, "value":"Asus" },
  { "id":5, "value":"Dell" },
  { "id":6, "value":"Google" },
  { "id":7, "value":"Hp" },
  { "id":8, "value":"Lenovo" },
  { "id":9, "value":"Samsung" },

  ];




  onSelect(categorys : string ){

    this.router.navigate(['/products'], {queryParams:{category: this.categorys}});

  }


}

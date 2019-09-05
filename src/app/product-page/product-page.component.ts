import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material'
import { DialogPageComponent } from '../dialog-page/dialog-page.component';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  category: string = '';
  discount: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.category = event.target.value;
    //console.log(this.category);
    this.router.navigate(['/products'], {queryParams:{category: this.category} });
  }

 selectDiscount(id:number)
 {
  console.log(id);
 }
  constructor( public dialog:MatDialog,private router : Router,private route : ActivatedRoute, private spinner: NgxSpinnerService) { }


openDialog(){
  this.dialog.open( DialogPageComponent);

}

closeDialog()
{
  alert('ff');
  let dialogRef =this.dialog.open( DialogPageComponent);
  
}

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

  public discounts = [
    { "id":1, "name":"All" },
    { "id":2, "name":"large" },
    { "id":3, "name":"small" }
  ];

  onSelect(categorys : string ){

    this.router.navigate(['/products'], {queryParams:{category: this.categorys}});

  }


}

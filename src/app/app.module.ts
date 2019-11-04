import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FlexLayoutModule} from "@angular/flex-layout";












import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { MatBadgeModule } from '@angular/material/badge';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AllproductsComponent } from './allproducts/allproducts.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RangeSliderModule  } from 'ngx-rangeslider-component';


import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs';











@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductPageComponent,
    HeaderComponent,
    DialogPageComponent,
    FooterPageComponent,
    AllproductsComponent






  ],
  entryComponents: [
    DialogPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    RangeSliderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    MatGridListModule,
    NgxSpinnerModule,
    Ng5SliderModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule,
    RouterModule.forRoot([

      { path: '', component: HomePageComponent  },
      { path: 'allproducts', component: ProductPageComponent  },
      { path: 'storeapps', component: HomePageComponent },
      { path: 'products/category/hangout-meet-hardware', component: AllproductsComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

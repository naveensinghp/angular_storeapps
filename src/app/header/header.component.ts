import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  control = new FormControl();
  streets : string[] = ['Mobile','Tv','Monitor','DESKTOP','GAMES'];
  filteredStreets: Observable<string[]>;

  constructor() {}
  
  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this. _filter(value))
    );
  }
  private _filter(value: string) : string[] 
  {
    const filterValue = this. _normalizeValue(value);
    return this.streets.filter(street => this. _normalizeValue(street).includes(filterValue));
  }
  private _normalizeValue(value: string)
  {
    return value.toLowerCase().replace(/\s/g, '');
  }
}

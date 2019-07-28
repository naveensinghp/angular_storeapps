import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  category = [
    { "id":1, "name":"Angular" },
    { "id":2, "name":"PHP" }
  ]


  constructor() { }

  ngOnInit() {
  }

}

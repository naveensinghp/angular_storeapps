import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeapps';
  panelOpenState = false;

  public colors = ["red","Yellow"];

   categorys = [
    { "id":1, "name":"All" },
    { "id":2, "name":"large" },
    { "id":3, "name":"small" }
  ];

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'


@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.css']
})
export class DialogPageComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {

  }

closeDialog(){
	
	this.dialog.closeAll();
}

}

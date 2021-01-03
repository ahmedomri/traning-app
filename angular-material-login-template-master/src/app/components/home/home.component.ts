import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  displayedColumns: string[] = ['ID','Date','Description'];
  dataSource = new MatTableDataSource<traning>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}

export interface traning {
  date: string;
  id: number;
  description :string;
  
}

const ELEMENT_DATA: traning[] = [
  {id:1,date:"12/01/2020",description:"description"},
  {id:2,date:"12/01/2020",description:"description"},
  {id:3,date:"12/01/2020",description:"description"},
  {id:4,date:"12/01/2020",description:"description"},
  {id:5,date:"12/01/2020",description:"description"},
  {id:6,date:"12/01/2020",description:"description"},
  {id:7,date:"12/01/2020",description:"description"},
  {id:8,date:"12/01/2020",description:"description"},
  {id:9,date:"12/01/2020",description:"description"},
  
];



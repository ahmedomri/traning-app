import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.css']
})
export class DialogElementsExampleDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogElementsExampleDialogComponent>){}

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

  timeLeft: number = 100;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 100;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


}

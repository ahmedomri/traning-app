import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  isSignedIn = false;
  constructor(public firebaseService : FirebaseService,public router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    {this.isSignedIn= true;
    this.firebaseService.isLoggedIn=true;
    this.router.navigate(['/home']);}
    else
    this.isSignedIn = false
  }

  
  
  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  matcher = new MyErrorStateMatcher();

}

import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  // Class variables (properties)
  user = new User('', '', '', '', '');
  
  // Class methods
  onSubmit(signupForm: NgForm) {
    console.log(signupForm.value);
    console.log(signupForm.value.email);
    console.log(signupForm.value.firstName);
    console.log(signupForm.value.lastName);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../LoginCredentials';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // Class variables (properties)
  loginCredentials = new LoginCredentials('', '');
  
  // Class methods
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    console.log(loginForm.value.email);
    console.log(loginForm.value.password);
  }

  constructor() { }

  ngOnInit() {
  }

}

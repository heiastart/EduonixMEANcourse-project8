import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  // Class variables (properties)
  user: User;
  
  // Class methods
  onSubmit(form) {

  }

  constructor() { }

  ngOnInit() {
  }

}

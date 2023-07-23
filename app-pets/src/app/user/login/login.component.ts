import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder){}

  loginFormGroup = this.fb.group({
    email: ['', {
      validators: [
        Validators.required,
        Validators.pattern(/^\w+@{1}\w+\.\w+$/)
      ]
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }]
  })
  
  onLogin() {

    let email = this.loginFormGroup.get('email')?.value;
    let password = this.loginFormGroup.get('password')?.value;

    console.log(email, password)
    // this.userService.login(email, password);

  };
}

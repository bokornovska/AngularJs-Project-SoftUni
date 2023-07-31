import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

const USERS_URL = 'https://pets-db-37c5b-default-rtdb.firebaseio.com/users/';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private http: HttpClient, private router: Router) { }

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

    this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
        { ...this.loginFormGroup.value, returnSecureToken: true }
      )
      .subscribe(
        (res) => {
          console.log('response -> ', res)
          this.loginFormGroup.reset();
          // this.matSnackBar.open("Account created", "OK", {
          //   verticalPosition: "top",
          //   horizontalPosition: "center",

          // })
          console.log('Login successful!')
          this.router.navigate(['/']);
        },
        // (error) => {
        //   let errorMessage = error.error.error.message;
        //   console.log('Sign up failed! -> ', errorMessage)
        // }
      )
  }
}

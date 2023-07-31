// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MatSnackBarModule } from '@angular/material/snack-bar';


// import { ToastrService } from 'ngx-toastr';

const USERS_URL = 'https://pets-db-37c5b-default-rtdb.firebaseio.com/users/';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  registerFormGroup = this.fb.group({
    email: ['', {
      validators: [
        Validators.required,
        Validators.pattern(/^\w+@{1}\w+\.\w+$/)
      ]
    }],
    name: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }],
    repass: ['', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }],
  })
  matSnackBar: any;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    // matSnackBar: MatSnackBarModule
  ) { }

  onRegister() {

    let email = this.registerFormGroup.controls['email'].value;
    let name = this.registerFormGroup.controls['name'].value;
    let password = this.registerFormGroup.controls['password'].value;
    let repass = this.registerFormGroup.controls['repass'].value;


    this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`,
        { ...this.registerFormGroup.value, returnSecureToken: true }
      )
      .subscribe(
        (res) => {
        console.log('response -> ', res)
        this.registerFormGroup.reset();
        // this.matSnackBar.open("Account created", "OK", {
        //   verticalPosition: "top",
        //   horizontalPosition: "center",

        // })
        console.log('Account created!')
        this.router.navigate(['/']);
      },
      // (error) => {
      //   let errorMessage = error.error.error.message;
      //   console.log('Sign up failed! -> ', errorMessage)
      // }
      )

    // if (password == repass) {
    //   this.userService.register(email!, name!, password!, repass!).subscribe(() => {
    //     this.router.navigate(['/login'])
    //   });
    // } else {
    //   throw new Error('Passwords don\'t match')
    // }


    // try {
    //   if (password == repass) {
    //     this.userService.register(email!, name!, password!, repass!);
    //   } else {
    //     throw new Error('Passwords don\'t match')
    //   }
    // } catch (err: any) {
    //   this.toastr.error('Passwords don\'t match', 'Error')
    //   this.registerFormGroup.get('password')?.reset();
    //   this.registerFormGroup.get('repass')?.reset();
    // }

  }
}

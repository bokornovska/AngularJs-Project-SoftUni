// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';

import { AuthService } from 'src/app/shared/services/auth.service';
// import { ToastrService } from 'ngx-toastr';


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
    // private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    // private toastr: ToastrService,
    
  ) { }




  ngOnInit(): void {
    localStorage.clear();
  }

  onRegister() {
    let email = this.registerFormGroup.controls['email'].value;
    let password = this.registerFormGroup.controls['password'].value;
    let repass = this.registerFormGroup.controls['repass'].value;

    try {
      if (password == repass) {
        this.authService.register(email!, password!);

        // this.matSnackBar.open("Account created", "OK", {
        //   verticalPosition: "top",
        //   horizontalPosition: "center",
  
        // })
        console.log('Registration successful!')

      } else {
        throw new Error('Passwords don\'t match')
      }
    } catch (err: any) {
      console.log('Passwords don\'t match', 'Error')

      

      this.registerFormGroup.get('password')?.reset();
      this.registerFormGroup.get('repass')?.reset();
    }

  }

}

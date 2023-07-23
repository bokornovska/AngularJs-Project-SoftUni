import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
      validators:[
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
    repass:['', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }],
  })


  constructor(private fb: FormBuilder) { }

  onRegister() {

    let email = this.registerFormGroup.controls['email'].value;
    let name = this.registerFormGroup.controls['name'].value;
    let password = this.registerFormGroup.controls['password'].value;
    let repass = this.registerFormGroup.controls['repass'].value;

    console.log(email, name, password, repass)
    // try {
    //   if (password == repass) {
    //     this.userService.register(email, password);
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

import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { constructor } from 'jasmine';
// import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.css']
})
export class PetsCreateComponent implements OnInit{


  createFormGroup = this.fb.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    years: ['', {
      validators: [
        Validators.required, 
        Validators.pattern(/\b\d+\s(?:years|months)\b/)
      ]
    }],
    location: ['', [Validators.required]],
    description: ['', {
      validators: [
        Validators.required, 
        Validators.minLength(20)
      ]
    }],
    imageUrl: ['', {
      validators: [
        Validators.required, 
        Validators.pattern(/^https?:\/\/.+((\.jpg)|(\.png)|(\.jpeg))$/)
      ]
    }],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // if (!this.userId) {
    //   this.router.navigate(['/login']);
    // }
  }

  onCreate() {

    let name = this.createFormGroup.controls['name'].value;
    let type = this.createFormGroup.controls['type'].value;
    let years = this.createFormGroup.controls['years'].value;
    let description = this.createFormGroup.controls['description'].value;
    let imageUrl = this.createFormGroup.controls['imageUrl'].value;
    // let owner = this.userService.uid;
    // let rating = 0;

    console.log(name, type, years, description, imageUrl)
  

  }

}

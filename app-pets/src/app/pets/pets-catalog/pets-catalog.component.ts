import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
// import { UserService } from 'src/app/user/user.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets-catalog',
  templateUrl: './pets-catalog.component.html',
  styleUrls: ['./pets-catalog.component.css']
})
export class PetsCatalogComponent implements OnInit {

  // petsList: Pet[] = [];
  // pets: any;

  // isLoading: boolean = true;

  // constructor(private petService: PetService, private userService: UserService) { }

  // get isLogged(): boolean {
  //   return this.userService.isLogged;
  // }

  // ngOnInit(): void {
  //   this.petService.getAllPets().subscribe({

  //     next: (pets) => {
  //       console.log(pets);
  //       this.petsList = pets;
  //       this.isLoading = false;
  //     },
  //     error: (err) => {
  //       this.isLoading = false;
  //       console.error(`Error: ${err}`)
  //     }
  //   })
  // }

  allPets!: Pet[];
  

  constructor(private petService: PetService) { }

  ngOnInit(): void {

    this.petService.getAllPets().subscribe(data => {
      this.allPets= data;
      console.log(this.allPets[0].description);
    });
    
  }
}


import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { UserService } from 'src/app/user/user.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets-catalog',
  templateUrl: './pets-catalog.component.html',
  styleUrls: ['./pets-catalog.component.css']
})
export class PetsCatalogComponent implements OnInit{

  petsList: Pet[] = [];

  isLoading: boolean = true;

  constructor(private petService: PetService, private userService:UserService) {}

  get isLogged():boolean{
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    this.petService.getAllPets().subscribe({
      // console.log(pets[0]);
      next:(pets) => {
        console.log(pets);
        this.petsList = pets;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`)
      }
    })
  }
}


// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import { Theme } from '../types/theme';
// import { UserService } from '../user/user.service';

// @Component({
//   selector: 'app-themes-list',
//   templateUrl: './themes-list.component.html',
//   styleUrls: ['./themes-list.component.css']
// })
// export class ThemesListComponent implements OnInit {

//   themesList: Theme[] = [];
//   isLoading: boolean = true;

//   constructor(private apiService: ApiService, private userService:UserService) {}

//   get isLogged():boolean{
//     return this.userService.isLogged;
//   }
//   ngOnInit(): void {
//     this.apiService.getThemes().subscribe({
//       // console.log(themes[0]);
//       next:(themes) => {
//         this.themesList = themes;
//         this.isLoading = false;
//       },
//       error: (err) => {
//         this.isLoading = false;
//         console.error(`Error: ${err}`)
//       }
//     })
//   }
// }
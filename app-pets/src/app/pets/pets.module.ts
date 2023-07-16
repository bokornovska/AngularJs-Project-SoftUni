import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsCatalogComponent } from './pets-catalog/pets-catalog.component';
import { PetsDetailsComponent } from './pets-details/pets-details.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';
import { PetsRoutingModule } from './pets-routing.module';



@NgModule({
  declarations: [
    PetsCatalogComponent,
    PetsDetailsComponent,
    PetsCreateComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
  ]
})
export class PetsModule { }

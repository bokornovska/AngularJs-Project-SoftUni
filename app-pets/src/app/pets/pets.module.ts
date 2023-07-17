import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsCatalogComponent } from './pets-catalog/pets-catalog.component';
import { PetsDetailsComponent } from './pets-details/pets-details.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';

import { PetsEditComponent } from './pets-edit/pets-edit.component';
import { PetComponent } from './pet/pet.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PetsCatalogComponent,
    PetsDetailsComponent,
    PetsCreateComponent,
    PetsEditComponent,
    PetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    
  ],

})
export class PetsModule { }

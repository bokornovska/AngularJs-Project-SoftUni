import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsCatalogComponent } from './pets-catalog/pets-catalog.component';
import { PetsDetailsComponent } from './pets-details/pets-details.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';

// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'pets',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PetsCatalogComponent,
      },
      {
        path: ':petId',
        component: PetsDetailsComponent
      },
      
    ]
  },
  {
    path: 'add-pet',
    component: PetsCreateComponent,
    // canActivate:[AuthActivate],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }

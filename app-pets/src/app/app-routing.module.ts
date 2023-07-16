import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetsCatalogComponent } from './pets/pets-catalog/pets-catalog.component';
import { PetsDetailsComponent } from './pets/pets-details/pets-details.component';
import { PetsEditComponent } from './pets/pets-edit/pets-edit.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PetsCreateComponent } from './pets/pets-create/pets-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pets', children: [
      { path: '', pathMatch: 'full', component: PetsCatalogComponent },
      { path: 'details/:petId', component: PetsDetailsComponent}, //canActivate: [AuthGuard]
      { path: 'edit/:petId', component: PetsEditComponent, }, //canActivate: [AuthGuard]
    ]
  },
  // { path: 'about', component: AboutComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'profile/edit', component: EditProfileComponent, canActivate: [AuthGuard] },
  // { path: 'profile/books', component: MyBooksComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: PetsCreateComponent },//canActivate: [AuthGuard]
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

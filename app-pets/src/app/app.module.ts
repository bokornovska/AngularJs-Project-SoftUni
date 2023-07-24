import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { PetComponent } from './pets/pet/pet.component';
import { PetsModule } from './pets/pets.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
    PetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

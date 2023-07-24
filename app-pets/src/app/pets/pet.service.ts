import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map, Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { environment } from 'src/environments/environment.development';


const BASE_URL = 'https://pets-bd31f-default-rtdb.firebaseio.com/pets';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  constructor(private http: HttpClient) { }

  getAllPets() {
    const { appUrl } = environment;
    return this.http.get<Pet[]>(`${appUrl}`);
    
  }

  getPet(id:string) {
    const { appUrl } = environment;
    return this.http.get<Pet>(`${appUrl}/Pets/${id}`);
  }
}

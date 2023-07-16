import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { environment } from 'src/environments/environment.development';


const BASE_URL = 'https://holywaves.backendless.app/api/data/Pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  // getAllPets(): Observable<any> {
  //   return this.http.get<any>(`${BASE_URL}.json`)
  //     .pipe(
  //       map((res: Response) => {
  //         if (res) {
  //           return Object.entries(res).map(([petId, v]) => Object.assign({}, { petId }, v));
  //         } else {
  //           return;
  //         }
  //       })
  //     )
  // };

  getAllPets() {
    const { appUrl } = environment;
    return this.http.get<Pet[]>(`${appUrl}/Pets`);
  }

  getPet(id:string) {
    const { appUrl } = environment;
    return this.http.get<Pet>(`${appUrl}/Pets/${id}`);
  }
}

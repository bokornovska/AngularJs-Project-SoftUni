import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})

export class PetComponent {
  @Input('pet') pet!: Pet;
  
  constructor() { }
  
  ngOnInit(): void {
  }
}

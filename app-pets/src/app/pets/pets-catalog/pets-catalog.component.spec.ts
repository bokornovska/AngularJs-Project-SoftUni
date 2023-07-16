import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsCatalogComponent } from './pets-catalog.component';

describe('PetsCatalogComponent', () => {
  let component: PetsCatalogComponent;
  let fixture: ComponentFixture<PetsCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsCatalogComponent]
    });
    fixture = TestBed.createComponent(PetsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

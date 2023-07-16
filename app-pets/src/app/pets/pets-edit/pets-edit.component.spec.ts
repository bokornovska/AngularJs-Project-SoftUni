import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsEditComponent } from './pets-edit.component';

describe('PetsEditComponent', () => {
  let component: PetsEditComponent;
  let fixture: ComponentFixture<PetsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsEditComponent]
    });
    fixture = TestBed.createComponent(PetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

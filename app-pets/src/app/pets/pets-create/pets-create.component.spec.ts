import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsCreateComponent } from './pets-create.component';

describe('PetsCreateComponent', () => {
  let component: PetsCreateComponent;
  let fixture: ComponentFixture<PetsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsCreateComponent]
    });
    fixture = TestBed.createComponent(PetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

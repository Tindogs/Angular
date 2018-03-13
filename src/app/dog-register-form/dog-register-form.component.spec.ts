import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogRegisterFormComponent } from './dog-register-form.component';

describe('DogRegisterFormComponent', () => {
  let component: DogRegisterFormComponent;
  let fixture: ComponentFixture<DogRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

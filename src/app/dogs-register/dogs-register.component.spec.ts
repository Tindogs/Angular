import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsRegisterComponent } from './dogs-register.component';

describe('DogsRegisterComponent', () => {
  let component: DogsRegisterComponent;
  let fixture: ComponentFixture<DogsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

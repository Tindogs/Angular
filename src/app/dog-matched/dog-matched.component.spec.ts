import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogMatchedComponent } from './dog-matched.component';

describe('DogMatchedComponent', () => {
  let component: DogMatchedComponent;
  let fixture: ComponentFixture<DogMatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogMatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogMatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

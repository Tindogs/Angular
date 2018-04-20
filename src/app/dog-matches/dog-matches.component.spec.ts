import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogMatchesComponent } from './dog-matches.component';

describe('DogMatchesComponent', () => {
  let component: DogMatchesComponent;
  let fixture: ComponentFixture<DogMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

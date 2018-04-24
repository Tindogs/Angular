import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogMatchedDetailComponent } from './dog-matched-detail.component';

describe('DogMatchedDetailComponent', () => {
  let component: DogMatchedDetailComponent;
  let fixture: ComponentFixture<DogMatchedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogMatchedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogMatchedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

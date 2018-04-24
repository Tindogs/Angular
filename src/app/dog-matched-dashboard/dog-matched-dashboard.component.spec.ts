import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogMatchedDashboardComponent } from './dog-matched-dashboard.component';

describe('DogMatchedDashboardComponent', () => {
  let component: DogMatchedDashboardComponent;
  let fixture: ComponentFixture<DogMatchedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogMatchedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogMatchedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

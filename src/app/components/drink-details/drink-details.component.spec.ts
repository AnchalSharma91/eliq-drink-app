import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkDetailsComponent } from './drink-details.component';

describe('DrinkDetailsComponent', () => {
  let component: DrinkDetailsComponent;
  let fixture: ComponentFixture<DrinkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

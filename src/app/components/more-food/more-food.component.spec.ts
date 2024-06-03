import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFoodComponent } from './more-food.component';

describe('MoreFoodComponent', () => {
  let component: MoreFoodComponent;
  let fixture: ComponentFixture<MoreFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

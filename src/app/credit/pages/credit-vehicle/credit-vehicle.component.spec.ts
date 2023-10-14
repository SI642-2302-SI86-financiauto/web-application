import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditVehicleComponent } from './credit-vehicle.component';

describe('CreditVehicleComponent', () => {
  let component: CreditVehicleComponent;
  let fixture: ComponentFixture<CreditVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditVehicleComponent]
    });
    fixture = TestBed.createComponent(CreditVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

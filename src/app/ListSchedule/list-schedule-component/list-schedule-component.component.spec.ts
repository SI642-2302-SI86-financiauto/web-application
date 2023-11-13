import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScheduleComponentComponent } from './list-schedule-component.component';

describe('ListScheduleComponentComponent', () => {
  let component: ListScheduleComponentComponent;
  let fixture: ComponentFixture<ListScheduleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListScheduleComponentComponent]
    });
    fixture = TestBed.createComponent(ListScheduleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

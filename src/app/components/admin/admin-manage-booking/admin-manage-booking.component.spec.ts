import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageBookingComponent } from './admin-manage-booking.component';

describe('AdminManageBookingComponent', () => {
  let component: AdminManageBookingComponent;
  let fixture: ComponentFixture<AdminManageBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

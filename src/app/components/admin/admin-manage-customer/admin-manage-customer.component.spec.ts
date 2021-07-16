import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCustomerComponent } from './admin-manage-customer.component';

describe('AdminManageCustomerComponent', () => {
  let component: AdminManageCustomerComponent;
  let fixture: ComponentFixture<AdminManageCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

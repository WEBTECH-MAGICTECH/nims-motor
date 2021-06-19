import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAllComponent } from './use-all.component';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('UseAllComponent', () => {
  let component: UseAllComponent;
  let fixture: ComponentFixture<UseAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

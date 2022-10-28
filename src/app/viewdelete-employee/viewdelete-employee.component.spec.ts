import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeleteEmployeeComponent } from './viewdelete-employee.component';

describe('ViewdeleteEmployeeComponent', () => {
  let component: ViewdeleteEmployeeComponent;
  let fixture: ComponentFixture<ViewdeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdeleteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

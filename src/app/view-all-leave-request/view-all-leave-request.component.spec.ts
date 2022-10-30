import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLeaveRequestComponent } from './view-all-leave-request.component';

describe('ViewAllLeaveRequestComponent', () => {
  let component: ViewAllLeaveRequestComponent;
  let fixture: ComponentFixture<ViewAllLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCheckInCheckOutComponent } from './view-all-check-in-check-out.component';

describe('ViewAllCheckInCheckOutComponent', () => {
  let component: ViewAllCheckInCheckOutComponent;
  let fixture: ComponentFixture<ViewAllCheckInCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCheckInCheckOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCheckInCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

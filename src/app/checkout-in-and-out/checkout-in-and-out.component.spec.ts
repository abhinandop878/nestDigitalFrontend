import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutInAndOutComponent } from './checkout-in-and-out.component';

describe('CheckoutInAndOutComponent', () => {
  let component: CheckoutInAndOutComponent;
  let fixture: ComponentFixture<CheckoutInAndOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutInAndOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutInAndOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

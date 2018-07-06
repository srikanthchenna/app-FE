import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModelPopupComponent } from './app-model-popup.component';

describe('AppModelPopupComponent', () => {
  let component: AppModelPopupComponent;
  let fixture: ComponentFixture<AppModelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModelPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

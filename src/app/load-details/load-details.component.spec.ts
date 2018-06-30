import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetailsComponent } from './load-details.component';

describe('LoadDetailsComponent', () => {
  let component: LoadDetailsComponent;
  let fixture: ComponentFixture<LoadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

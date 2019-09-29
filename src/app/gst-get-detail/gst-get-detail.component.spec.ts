import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstGetDetailComponent } from './gst-get-detail.component';

describe('GstGetDetailComponent', () => {
  let component: GstGetDetailComponent;
  let fixture: ComponentFixture<GstGetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstGetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstGetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcustomerdetailsComponent } from './ccustomerdetails.component';

describe('CcustomerdetailsComponent', () => {
  let component: CcustomerdetailsComponent;
  let fixture: ComponentFixture<CcustomerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcustomerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

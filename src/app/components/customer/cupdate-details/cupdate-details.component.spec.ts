import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupdateDetailsComponent } from './cupdate-details.component';

describe('CupdateDetailsComponent', () => {
  let component: CupdateDetailsComponent;
  let fixture: ComponentFixture<CupdateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupdateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

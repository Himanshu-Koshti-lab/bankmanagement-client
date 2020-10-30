import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcreateAccountComponent } from './ccreate-account.component';

describe('CcreateAccountComponent', () => {
  let component: CcreateAccountComponent;
  let fixture: ComponentFixture<CcreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcreateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

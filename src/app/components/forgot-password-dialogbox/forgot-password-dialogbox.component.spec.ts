import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordDialogboxComponent } from './forgot-password-dialogbox.component';

describe('ForgotPasswordDialogboxComponent', () => {
  let component: ForgotPasswordDialogboxComponent;
  let fixture: ComponentFixture<ForgotPasswordDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

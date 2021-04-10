import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaccountStatementComponent } from './caccount-statement.component';

describe('CaccountStatementComponent', () => {
  let component: CaccountStatementComponent;
  let fixture: ComponentFixture<CaccountStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaccountStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaccountStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFundTransferComponent } from './cfund-transfer.component';

describe('CFundTransferComponent', () => {
  let component: CFundTransferComponent;
  let fixture: ComponentFixture<CFundTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFundTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

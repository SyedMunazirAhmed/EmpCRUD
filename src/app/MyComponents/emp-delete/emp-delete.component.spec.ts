import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDeleteComponent } from './emp-delete.component';

describe('EmpDeleteComponent', () => {
  let component: EmpDeleteComponent;
  let fixture: ComponentFixture<EmpDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpDeleteComponent]
    });
    fixture = TestBed.createComponent(EmpDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

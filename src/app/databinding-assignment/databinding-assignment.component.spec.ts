import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingAssignmentComponent } from './databinding-assignment.component';

describe('DatabindingAssignmentComponent', () => {
  let component: DatabindingAssignmentComponent;
  let fixture: ComponentFixture<DatabindingAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingAssignmentComponent]
    });
    fixture = TestBed.createComponent(DatabindingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

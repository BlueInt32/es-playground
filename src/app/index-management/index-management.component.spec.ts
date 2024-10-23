import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexManagementComponent } from './index-management.component';

describe('IndexManagementComponent', () => {
  let component: IndexManagementComponent;
  let fixture: ComponentFixture<IndexManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

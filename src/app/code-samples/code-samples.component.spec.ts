import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSamplesComponent } from './code-samples.component';

describe('CodeSamplesComponent', () => {
  let component: CodeSamplesComponent;
  let fixture: ComponentFixture<CodeSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

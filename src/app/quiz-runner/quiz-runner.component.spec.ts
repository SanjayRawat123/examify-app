import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRunnerComponent } from './quiz-runner.component';

describe('QuizRunnerComponent', () => {
  let component: QuizRunnerComponent;
  let fixture: ComponentFixture<QuizRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizRunnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type AnswerType = 'TF' | 'MCQ' | 'STATEMENT';

interface QuizOption {
  text: string;
}

interface QuizQuestion {
  questionText: string;
  type: AnswerType;
  options: QuizOption[];
}

@Component({
  selector: 'app-create-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-quiz.html',
  styleUrl: './create-quiz.css'
})
export class CreateQuiz {

  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  quizDateTime = '';
  shuffleQuestions = false;
  shuffleAnswers = false;

  questions: QuizQuestion[] = [this.createQuestion()];
  selectedQuestionIndex = 0;

  /* ---------- HELPERS ---------- */

  createQuestion(): QuizQuestion {
    return {
      questionText: '',
      type: 'TF',
      options: [
        { text: 'True' },
        { text: 'False' }
      ]
    };
  }

  get activeQuestion(): QuizQuestion {
    return this.questions[this.selectedQuestionIndex];
  }

  selectQuestion(i: number) {
    this.selectedQuestionIndex = i;
  }

  addQuestion() {
    this.questions.push(this.createQuestion());
    this.selectedQuestionIndex = this.questions.length - 1;
  }

  removeQuestion(index: number) {
    if (this.questions.length === 1) return;

    this.questions.splice(index, 1);

    if (this.selectedQuestionIndex >= this.questions.length) {
      this.selectedQuestionIndex = this.questions.length - 1;
    }
  }

  changeType(type: AnswerType) {
    this.activeQuestion.type = type;

    if (type === 'TF') {
      this.activeQuestion.options = [
        { text: 'True' },
        { text: 'False' }
      ];
    } else {
      this.activeQuestion.options = [
        { text: 'Choice 1' },
        { text: 'Choice 2' }
      ];
    }
  }

  addChoice() {
    this.activeQuestion.options.push({
      text: `Choice ${this.activeQuestion.options.length + 1}`
    });
  }

  removeChoice(index: number) {
    this.activeQuestion.options.splice(index, 1);
  }

  saveQuiz() {
    console.log('QUIZ SAVED:', {
      quizDateTime: this.quizDateTime,
      shuffleQuestions: this.shuffleQuestions,
      shuffleAnswers: this.shuffleAnswers,
      questions: this.questions
    });

    // reset everything
    this.questions = [this.createQuestion()];
    this.selectedQuestionIndex = 0;
    this.quizDateTime = '';
    this.shuffleQuestions = false;
    this.shuffleAnswers = false;

    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  }

  showPreview = false;
previewIndex = 0;

openPreview() {
  this.previewIndex = 0;
  this.showPreview = true;
}

closePreview() {
  this.showPreview = false;
}

}

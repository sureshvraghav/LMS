import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-quiz-page',
  standalone:true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './quiz-page.html',
  styleUrl: './quiz-page.css',
})
export class QuizPage {
currentQuestion = 5;
  totalQuestions = 20;
  timeLeft = '00:59:42';

  question = {
    text: 'Which HTML tag is used to define a hyperlink?',
    options: ['<link>', '<a>', '<href>', '<url>']
  };
}

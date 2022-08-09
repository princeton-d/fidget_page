import { toggleDisplay } from './main.js';
import quiz from "./js_quiz_question.js";
'use strict'

// DOM
const quizAnswerArea = document.querySelector('.quiz-answer-area')
// setting
// variables
const quizLength = Object.keys(quiz).length // 퀴즈의 총 문항 수
// function
class QuizTemplates {
  constructor(quiz) {
    this.question = quiz.question,
      this.answer = quiz.answer
    this.explanation = quiz.explanation
    this.leftButton = quiz.leftButton
    this.rightButton = quiz.rightButton
  }
  makeButton() {

  }
}
// event handling
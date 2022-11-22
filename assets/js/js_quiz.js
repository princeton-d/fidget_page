import { toggleDisplay } from './main.js';
import quiz from "./js_quiz_question.js"; // 퀴즈 object
'use strict'

// DOM
const contentsArea = document.querySelector('.contents-area');
const jsQuizBox = document.querySelector('.js-quiz-box');
const jsQuizArea = document.querySelector('.js-quiz-area');
const quizDescriptionArea = document.querySelector('.quiz-description-area')
const quizAnswer = document.querySelector('.quiz-answer');
const quizDescription = document.querySelector('.quiz-description');
const nextQuizButton = document.querySelector('.next-quiz-button');
const questionArea = document.querySelector('.question-area');
const quizScore = document.querySelector('.quiz-score');
const quizRound = document.querySelector('.quiz-round');
const questionText = document.querySelector('.question-text')
const leftButtonArea = document.querySelector('.quiz-left-button')
const rightButtonArea = document.querySelector('.quiz-right-button')
// setting
let QUIZ_COUNTER = 0;
let ANSWER_COUNT = 0; // 맞게 입력한 정답의 수
const QUIZ_LENGTH = Object.keys(quiz).length; // 퀴즈의 총 문항 수
// variables
// function
class QuizTemplates {
  constructor(quiz) {
    this.question = quiz.question,
      this.answer = quiz.answer
    this.description = quiz.description
    this.leftButton = quiz.leftButton
    this.rightButton = quiz.rightButton
  }
}
function openQuizArea() {
  toggleDisplay(contentsArea, 'flex');
  toggleDisplay(jsQuizArea, 'flex'); // 퀴즈 컨텐츠 display: none -> flex
  render(); // 화면에 문제를 출력함
}
function render() { // 화면에 문제를 출력함
  const Quiz = makeQuizClass()
  questionText.innerHTML = Quiz.question; // 문제 text 입력
  quizDescription.innerHTML = Quiz.description; // 해설 text 입력
  quizAnswer.innerHTML = `정답: ${Quiz.answer}` // 해설창에 정답 안내 출력
  quizScore.innerHTML = `score: ${ANSWER_COUNT}`; // score 출력
  quizRound.innerHTML = `Round: ${QUIZ_COUNTER}/${QUIZ_LENGTH}` // Round 출력
  checkAnswerButton(Quiz) // 해당 문제의 버튼에 정답버튼 여부 정하기
}
function makeQuizClass() { // 다음 번호의 quiz class 생성
  QUIZ_COUNTER++;
  const Quiz = new QuizTemplates(quiz[QUIZ_COUNTER]);
  return Quiz;
}
function checkAnswerButton(quiz) { // 해당 문제의 버튼에 정답버튼 여부 정하기
  const leftButton = quiz.leftButton;
  const rightButton = quiz.rightButton;
  const answer = quiz.answer;
  leftButton === answer ? leftButtonArea.classList.add('quiz-answer') : leftButtonArea.classList.remove('quiz-answer'); // 정답이면 quiz-answer 클래스 추가 오답이면 삭제
  rightButton === answer ? rightButtonArea.classList.add('quiz-answer') : rightButtonArea.classList.add('quiz-answer'); // 정답이면 quiz-answer 클래스 추가 오답이면 삭제
  leftButtonArea.innerHTML = leftButton;
  rightButtonArea.innerHTML = rightButton;
}
function handleAnswerButton(e) { // 클릭한 버튼에 quiz-answer class가 있으면 정답
  e.target.classList.contains('quiz-answer') ? ANSWER_COUNT++ : '';
  printDescription() // 해설화면 출력
}
function printDescription() { // 문제 숨기고 설명 출력
  toggleDisplay(questionArea, 'none')
  toggleDisplay(quizDescriptionArea, 'flex')

}
function hideDescription() { // 설명을 숨기고 다음문제 출력
  let count = QUIZ_COUNTER;
  if (count !== 20) {
    toggleDisplay(questionArea, 'block')
    toggleDisplay(quizDescriptionArea, 'none')
    render()
  } else {
    printScore()
    console.log('game end')
  }
}
function printScore() {
  toggleDisplay(quizDescriptionArea, 'none')
}
removeQuiz()
export function removeQuiz() {
  toggleDisplay(jsQuizArea, 'none'); // 퀴즈 컨텐츠 display: none -> flex
  QUIZ_COUNTER = 0;
  ANSWER_COUNT = 0;
}

// event handling
jsQuizBox.addEventListener('click', openQuizArea); // 퀴즈 박스 클릭 -> 퀴즈 컨텐츠 노출
leftButtonArea.addEventListener('click', handleAnswerButton);
rightButtonArea.addEventListener('click', handleAnswerButton);
nextQuizButton.addEventListener('click', hideDescription)
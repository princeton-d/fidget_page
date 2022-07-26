import { toggleDisplay } from './main.js';
'use strict'

// DOM
const contentsArea = document.querySelector('.contents-area');
const worldCupBox = document.querySelector('.ideal-world-cup-box'); // 이상형월드컵 box
export const worldCupArea = document.querySelector('.ideal-world-cup-area'); // 전체 영역
const worldCupStartPage = document.querySelector('.world-cup-start-page'); // 초기 시작버튼 있는 페이지
const startButton = document.querySelector('.ideal-world-cup-start-button'); // 시작버튼
const SelectArea = document.querySelector('.Select-area'); // 이상형월드컵 게임화면
const processState = document.querySelector('.process-box'); // 이상형월드컵 진행상황창

// setting
const NUMBER_OF_PICTURES = 36; // 이번 월드컵 사진 갯수
// variables
const pictures = {} // 이상형월드컵 사진들

// function
function makePicture() { // pictures객체에 지정한 사진의 수 만큼 사진 주소 넣어줌
  for (let i = 1; i <= NUMBER_OF_PICTURES; i++) {
    pictures[i] = `../images/present_cup_${i}.jpeg`
    console.log(pictures[i])
  }
}
function openWorldCupArea() { // 이상형월드컵 디스플레이 노출
  toggleDisplay(contentsArea, 'flex');
  toggleDisplay(worldCupArea, 'flex');
}
function startWorldCup() { // 이상형월드컵 시작
  toggleDisplay(worldCupStartPage, 'none')
  toggleDisplay(SelectArea, 'flex')
}
// event handling
worldCupBox.addEventListener('click', openWorldCupArea); // 이상형월드컵 디스플레이 노출
startButton.addEventListener('click', startWorldCup); // 이상형월드컵 시작
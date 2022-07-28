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
const leftItem = document.querySelector('.left-item');
const rightItem = document.querySelector('.right-item');
const worldCupResult = document.querySelector('.world-cup-result')
const restartWorldCup = document.querySelector('.restart-world-cup')

// setting
let NUMBER_OF_PICTURES = 32; // 이번 월드컵 사진 갯수
let ROUND = 0;

// variables
const pictures = []; // 이상형월드컵 사진들
const selectPictures = []; // 이상형으로 선택된 사진들

// function
function openWorldCupArea() { // 이상형월드컵 디스플레이 노출
  toggleDisplay(contentsArea, 'flex');
  toggleDisplay(worldCupArea, 'flex');
  toggleDisplay(worldCupStartPage, 'flex');
}

function startWorldCup() { // 이상형월드컵 시작
  toggleDisplay(worldCupStartPage, 'none');
  toggleDisplay(SelectArea, 'flex');
  toggleDisplay(worldCupResult, 'none')
  processState.innerHTML = `개발자 선물 ${NUMBER_OF_PICTURES}강 ${++ROUND}/${NUMBER_OF_PICTURES / 2}`; // 상단 설명text
  makePictures(NUMBER_OF_PICTURES); // pictures배열의 NUMBER_OF_PICTURES 만큼 사진 주소를 넣어줌
  randomPictures(pictures); // pictures배열의 요소를 랜덤하게 섞어줌
  printPictures(); // 화면에 이상형 사진 출력
}
function makePictures(NUMBER_OF_PICTURES) { // pictures배열의 NUMBER_OF_PICTURES 만큼 사진 주소 넣어줌
  for (let i = 0; i < NUMBER_OF_PICTURES; i++) {
    pictures[i] = `./assets/images/present_cup_${i + 1}.jpeg`;
  }
}
function randomPictures(array) { // 배열의 요소를 랜덤하게 섞어줌
  array.sort(() => Math.random() - 0.5);
}
function printPictures() {
  if (pictures[0] !== undefined) {
    leftItem.style.background = `url(${pictures[0]}) right center / contain no-repeat`;
    rightItem.style.background = `url(${pictures[1]}) left center / contain no-repeat`;
  } else {
    nextRound()
  }
}

function selectLeftPicture() {
  leftItem.removeEventListener('click', selectLeftPicture); // 클릭이벤트 중단
  selectPictures.push(pictures[0]); // 선택된 사진을 배열에 저장함
  deleteUsedPictures(); // 선택에 사용된 사진 2장 배열에서 제거
  handleSelectAnimation(leftItem, rightItem); // 애니메이션 효과
  setTimeout(() => {
    printPictures();
    processState.innerHTML = `개발자 선물 ${NUMBER_OF_PICTURES}강 ${++ROUND}/${NUMBER_OF_PICTURES / 2}`;
    leftItem.addEventListener('click', selectLeftPicture); // 클릭이벤트 다시 실행
  }, 1500);
}
function selectRightPicture() {
  rightItem.removeEventListener('click', selectRightPicture); // 클릭이벤트 중단
  selectPictures.push(pictures[1]); // 선택된 사진을 배열에 저장함
  deleteUsedPictures(); // 선택에 사용된 사진 2장 배열에서 제거
  handleSelectAnimation(rightItem, leftItem); // 애니메이션 효과
  setTimeout(() => {
    printPictures()
    processState.innerHTML = `개발자 선물 ${NUMBER_OF_PICTURES}강 ${++ROUND}/${NUMBER_OF_PICTURES / 2}`;
    rightItem.addEventListener('click', selectRightPicture); // 클릭이벤트 다시 실행
  }, 1500);
}
function deleteUsedPictures() { // 선택에 사용된 사진 2장 배열에서 제거
  pictures.shift();
  pictures.shift();
}
function handleSelectAnimation(selectPicture, deletePicture) {
  selectPicture.style.animation = `select-picture 1.5s alternate ease-in`;
  deletePicture.style.animation = `delete-picture 1.5s alternate ease-in`;
  setTimeout(() => {
    selectPicture.style.animation = ``;
    deletePicture.style.animation = ``;
  }, 1500);
}

function nextRound() {
  if (NUMBER_OF_PICTURES > 2) {
    NUMBER_OF_PICTURES = NUMBER_OF_PICTURES / 2; // 월드컵 n강으로 수정
    ROUND = 0; // 라운드 초기화
    pictures.push.apply(pictures, selectPictures); // 이전 라운드에서 선택했던 사진들 pictures에 할당
    randomPictures(pictures); // 사진 랜덤하게 섞어줌
    selectPictures.length = 0; // 선택했던 사진배열 초기화
    printPictures();
  } else {
    endWorldCup();
  }
}

function endWorldCup() {
  toggleDisplay(SelectArea, 'none');
  resetWorldCup();
}
function resetWorldCup() {
  const resultPicture = selectPictures
  NUMBER_OF_PICTURES = 32;
  ROUND = -1;
  worldCupResult.style.backgroundImage = `url(${resultPicture})`
  toggleDisplay(worldCupResult, 'block')
  pictures.length = 0;
  selectPictures.length = 0;
};

export function removeWorldCup() {
  NUMBER_OF_PICTURES = 32;
  ROUND = 0;
  pictures.length = 0;
  selectPictures.length = 0;
  toggleDisplay(SelectArea, 'none');
  toggleDisplay(worldCupStartPage, 'none');
  toggleDisplay(worldCupArea, 'none');
}
// event handling
worldCupBox.addEventListener('click', openWorldCupArea); // 이상형월드컵 디스플레이 노출
startButton.addEventListener('click', startWorldCup); // 이상형월드컵 시작
leftItem.addEventListener('click', selectLeftPicture);
rightItem.addEventListener('click', selectRightPicture);
restartWorldCup.addEventListener('click', startWorldCup);
import { toggleDisplay } from './main.js';
'use strict'

// DOM

// setting
// variables
const quiz = {
  1: {
    question: `const result = (7 + 3 + '2'); 을 콘솔로 출력하면 어떤 값이 나오는가?(따옴표는 생략하도록 한다.)`,
    answer: `102`,
    explanation: `+ 연산자에는 '문자'를 붙이기, '숫자'의 연산이라는 두 가지 기능이 있다. 7,3은 모두 숫자이기 때문에 값은 10이다. 10, '2'의 경우 숫자와 문자 사이에 +가 있고, 10은 암묵적 형변환을 통해 '10'으로 변환되어 '102'가 된다.`,
  },
  2: {
    question: `차례대로 나열된 값들이 true라면 1을, false라면 0을 하시오 (값이 true, false, false, false, true 라면 10001 입력)
"false", true, false, undefined, " ", [], 0, -2, ""`,
    answer: `110011010`,
    explanation: `문자열 false = true, true = true, false = false, undefined = false, 공백 문자열 = true, 빈 배열 = true, 0 = false, 숫자열 -2 = true, 빈 문자열 = false`,
  },
  3: {
    question: ``,
    answer: ``,
    explanation: ``,
  },
}
// function
// event handling
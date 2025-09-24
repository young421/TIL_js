//Q. 당신의 생일은 몇월인가요?
//ex) 12월이라고 작성하고 아래 “탄생화와 꽃말은?” 버튼을 눌렀다면 아래와 같이 출력하기
//예) 12월의 탄생화는 포인세티아이고 꽃말은 축하, 감사입니다.

// 1. 생일 입력
// 2. 생일 입력 후 버튼 클릭 시 탄생화와 꽃말 등장

let birthDate = document.querySelectorAll('#date')
let year = document.querySelector('.user_year')
let month = document.querySelector('.user_month')
let day = document.querySelector('.user_day')
const dateBtn = document.querySelector('#date_btn')
let birthFlower = document.querySelector('.birth_flower')
console.log(birthDate, year, month, day, dateBtn, birthFlower)


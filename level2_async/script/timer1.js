// timer1.js
// setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    console.log('timer test'+num1)
    num1++
    if(num1 > 5) num1 = 1
}, 1000) */

// 0 ~ 6 반복타이머
// 123456 0123456 0123456
/* let num = 0;
const timer = setInterval(function(){
    num++
    if(num > 6) num = 0
    console.log(num)
}, 500) */

// 3 ~ 0 반복타이머
// 3210 3210 3210
/* let num = 3;
const timer = setInterval(function(){
    console.log(num)
    num--
    if(num<0) num = 3
}, 500) */

// 이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlidTotalNum = document.querySelector('.page_number .total')
let gentleNum = 0; //초기값
console.log(gentleSlide,gentleSlidTotalNum, gentleSlideCurrentNum)

//슬라이드 총 번호 표시
gentleSlidTotalNum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentleNum+1

//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 ...(반복) : 진행해야 하는 인덱스 순서
// gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
for(let i of gentleSlide) i.style.transition = 'opacity 0.5s'

let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    console.log(gentleNum)
    //console.log(gentleNum)
    for(let i of gentleSlide) {
        i.style.visibilty = 'hidden'
        i.style.opacity = '0'
    }
    gentleSlide[gentleNum].style.visibilty = 'visivilty'
    gentleSlide[gentleNum].style.opacity = '1'
    gentleSlideCurrentNum.textContent = gentleNum+1
},3000)

//이미지 슬라이드(역순)
//012345 현재 존재하는 슬라이드 인덱스
//43210 543210 543210(반복) : 진행해야 하는 인덱스 순서
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
let gentleNum2 = gentleSlide2.length -1; //초기값
console.log('초기값2', gentleNum2)
const gentleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0) gentleNum2 = gentleSlide2.length -1;
    console.log(gentleNum2) 
    for(let i of gentleSlide2) i.style.display = 'none'
    gentleSlide2[gentleNum2].style.display = ' block'
}, 500)
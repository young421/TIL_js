// 1. 썸네일 클릭 시 해당 이미지로 변경
// 1.1 슬라이드로 이미지 변경
// 2. 49개 리뷰 클릭 시 -> 하단의 리뷰 페이지로 이동
// 3. 최소 주문 수량 1개 
// 4. 최대 주문 수량 30개 
// 5. 수량 input에 직접 작성해도 가능하게 만들기
// 6. 장바구니 담기 / 구매하기 / 선물 등 버튼 클릭
// 6-1. (로그인 안 한 경우) 로그인 / 회원가입 페이지로 이동
// 6-2. (로그인한 경우) 원하는 버튼 페이지로 이동

// 1. 썸네일 클릭 시 해당 이미지로 변경
const thumnailA = document.querySelectorAll('.thumnail a')
const thumnailOverView = document.querySelector('.overview img')
console.log(thumnailA, thumnailOverView)

console.log(thumnailA[1].children[0].src) //두번째 썸네일 경로
console.log(thumnailOverView.src) //큰 이미지 경로

// 썸네일 클릭 -> 이미지 변경
thumnailA[0].addEventListener('click', ()=>{
    thumnailOverView.src = thumnailA[0].children[0].src
})
thumnailA[1].addEventListener('click', ()=>{
    thumnailOverView.src = thumnailA[1].children[0].src
})
thumnailA[2].addEventListener('click', ()=>{
    thumnailOverView.src = thumnailA[2].children[0].src
})
thumnailA[3].addEventListener('click', ()=>{
    thumnailOverView.src = thumnailA[3].children[0].src
})

// 2. 49개 리뷰 클릭 시 -> 하단의 리뷰 페이지로 이동
const reveiwLink = document.querySelector('.review_link')
console.log(reveiwLink)
// 리뷰 변수 작성 (리뷰 페이지 제작 시 스크롤 이동 적용)

// 3. 최소 주문 수량 1개 
// 4. 최대 주문 수량 30개 
const minusBtn = document.querySelector('#minus_btn')
const plusBtn = document.querySelector('#plus_btn')
const orderNum = document.querySelector('#order_num')
const orderPrice = document.querySelector('.order_price')
const orderInput = document.querySelector('#order_num')
const totalCount = document.querySelector('.total_count')
console.log(minusBtn, plusBtn, orderNum, orderPrice, orderInput, totalCount)
let num = 1; //초기주문수량

//초기값 : 주문수량칸에 값 1 적용하기
orderNum.value = num;

plusBtn.addEventListener('click',()=>{
    if(num <= 30){
        num++;
        minusPlusFunc()
    }else {alert('최대 구매 수량입니다')}
})

minusBtn.addEventListener('click',()=>{
    if(num > 1){
        num--;
        minusPlusFunc()
    }else {alert('최소 구매 수량입니다')}
})

function minusPlusFunc(){
    let total = num * 44900
    orderNum.value = num 
    orderPrice.children[0].textContent = total.toLocaleString('ko-kr') + '원'
    totalCount.children[0].textConten = `(${num}개)`
} //옆에 괄호 적용 x

// 5. 수량 input에 직접 작성해도 가능하게 만들기
orderInput.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){}
})

//로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin', 'false');
let loginStatus = '';

// 6. 장바구니 담기 / 구매하기 / 선물 등 버튼 클릭
// 6-1. (로그인 안 한 경우) "로그인 또는 회원가입 먼저 해주세요" -> 로그인 / 회원가입 페이지로 이동
// 6-2. (로그인한 경우) 원하는 버튼 페이지로 이동

// 6-1. (로그인 안 한 경우) 로그인 / 회원가입 페이지로 이동
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
const giftBtn = document.querySelector('#gift_btn')
console.log(cartBtn, buyBtn, giftBtn)

function loginFunc(){
    loginStatus = localStorage.getItem('isLogin')
    alert('로그인 또는 회원가입을 먼저 이용해 주세요')
    if(loginStatus == 'false'){
        location.href = './login.html'
    }
} //로그인 함수

cartBtn.addEventListener('click', ()=>{
    loginFunc()
})
buyBtn.addEventListener('click', ()=>{
    loginFunc()
})
giftBtn.addEventListener('click', ()=>{
    loginFunc()
})

// 6-2. (로그인한 경우) 원하는 버튼 페이지로 이동
// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 상품 이미지에 마우스이벤트 시 큰 상품 이미지 변경
// 2. 😊저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기 숨기기
// 6. 사이즈 select 초기 비활성화(색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 시 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량 + 주문금액 표시
// 10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소 (1 이라면 경고창 출력)
// 11. 😊(상품 미선택 시) 
// 12. (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
//----------------------------------------
// 1. 상품이미지에 마우스이벤트 시 큰 상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
const thumnailA = document.querySelectorAll('.thumnail a')
const thumnailOverView = document.querySelector('.overview img')
console.log(thumnailA, thumnailOverView)

//초기값(첫번 째 썸네일 a가 보이고 있단 뜻으로 테두리가 있음)
thumnailA[0].style.border = '1px solid #0aa5ff'

//두번 째 썸네일 마우스 올리면 큰 이미지가 두번 째 썸네일 이미지로 변경
// 콘솔 테스트 권장 1) 두번 째 썸네일 이미지로 경로 출력하기
console.log(thumnailA[1].children[0].src)/* <a><img src=''></a> */
// 콘솔 테스트 권장 2) 큰 이미지 경로 출력하기
console.log(thumnailOverView.src)

//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정 (초기값)
thumnailA[0].children[0].style.transition = 'transform 0.3s'
thumnailA[1].children[0].style.transition = 'transform 0.3s'
//이벤트 함수 시작
thumnailA[0].addEventListener('mouseover', ()=>{
    //테두리 활성화/비활성화
    thumnailA[1].style.border = '0'
    thumnailA[0].style.border = '1px solid #0aa5ff'
    //이미지 확대
    thumnailA[1].children[0].style.transform = 'scale(1)'
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    //이미지 변경
    thumnailOverView.src = thumnailA[0].children[0].src
})
thumnailA[1].addEventListener('mouseover', ()=>{
    thumnailA[0].style.border = '0'
    thumnailA[1].style.border = '1px solid #0aa5ff'
    //이미지 확대
    thumnailA[0].children[0].style.transform = 'scale(1)'
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    //이미지 변경
    thumnailOverView.src = thumnailA[1].children[0].src
})

//로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin', 'true');

// 2. 😊저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
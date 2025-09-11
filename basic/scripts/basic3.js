// 함수
// 1. 함수 대기(생성한 상태)
function func1(){
    console.log('반복 실행 내용')
}
// 2. 함수 호출 (생성 밖)
func1();
func1();

// 함수의 매개변수 활용
function storyfunc1(day, data='조약돌'){/* 이야기의 첫째날 성공 사례 */
    console.log(`매개변수 값 확인 : ${day, data}`)
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔']
    // 조약돌(데이터) 준비
    // const src = '조약돌'
    // 집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //1일차 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을 이용해서 집을 찾아갔습니다.
    //
    console.log(`${day}일차 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다.`)
}
/* 이야기의 둘째날 실패 사례*/
/* function storyfunc2(){
    const person = ['헨젤','그레텔']
    const src = '빵부스러기'
    alert(`${person[0]}과 ${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`)
} */
storyfunc1(1); //기본값 사용 시 매개변수 값 전달 안 함
storyfunc1(2, '빵부스러기'); //기본값 변경 시 매개변수 값 전달함
storyfunc1(3, '쌀');

//연습 에스프레소 샷
function coffeeFunc(menu, water, espr=1){
    // ?레시피
    // ?컵 물을 채운다
    // ?샷 에스프레소를 넣은다
    console.log(`${menu} 레시피`)
    console.log(`${water}컵 물을 채운다`)
    console.log(`${espr}샷 에스프레소를 넣는다`)
}
coffeeFunc('아메리카노', 2)/* 기본값 에스프레소 1샷 생략 */
coffeeFunc('아메키라노', 0)

// 키오스크 주문 출력 (배열 활용법)
/* function cafeFunc(order=1){
    // Q. 따뜻한 카페라떼 2잔 주문완료 되었습니다
    // Q. 차가운 아메리카노 1잔 주문완료 되었습니다
    // Q. 따뜻한 녹차라떼 2잔 주문완료 되었습니다
    // Q. 차가운 아메리카노 1잔 주문완료 되었습니다
    const icehot = ['따뜻한','차가운']
    const menu = ['카페라떼','아메리카노','녹차라떼']
    console.log(`${order}잔 주문완료 되었습니다`)
    console.log(`${icehot[0]} ${menu[0]} ${order}잔 주문완료 되었습니다`)
}
cafeFunc(2); */ //--------------------------> me

// 키오스크 주문 출력(배열 활용법) --> 해설
function kiosk_array(hotice, name, num){
    const type = ['따뜻한','차가운']
    const menu = ['카페라떼','아메리카노','녹차라떼']
    console.log(`${type[hotice]} ${menu[name]} ${num}잔 주문완료 되었습니다`)
    // 출력예시) 따뜻한 카페라떼 2잔 주문완료 되었습니다
}
kiosk_array(0, 0, 2);
kiosk_array(1, 1, 1);
kiosk_array(0, 2, 2);
kiosk_array(1, 1, 1);

// 키오스크 주문 출력(객체 활용법)
function kiosk_obj(hotice, name, num=1){
    const coffeeMenu = {
        type:['따뜻한','차가운'],
        menu:['카페라떼','아메리카노','녹차라떼'],
    }
    // 출력예시) 따뜻한 카페라떼 2잔 주문완료 되었습니다
    // console.log (`${coffeeMenu.속성(값))
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문완료 되었습니다`)
}
kiosk_obj(0, 0, 2)
kiosk_obj(1, 1)
kiosk_obj(0, 0, 2)
kiosk_obj(1, 2)

console.log('-------------------------리턴')
function plusFunc1(n1, n2){
    let calc = `${n1} * ${n2} = ${n1*n2}, `
    calc += `${n1} + ${n2} = ${n1+n2}`
    /* 문제1) 곱하기가 아닌 더하기만 나오는 문제 */
    // 대입연산자(=) 이전 변수 값을 제거하고 새로운 값 대입
    // 이전 변수 값을 유지하고 새로운 값 추가 대입 연산자는? 복합대입연산자
    // calc = calc + '계산식'
    // calc += '계산식'
    return calc
}
/* function plusFunc2(n1, n2){
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */
console.log(plusFunc1(1,2))
// alert(plusFunc1(2,3))

// 구구단 함수(2~9단까지)
// 출력예시) 변수 x 변수 = 결과
function dan99Func(dan){
    let dan99Total = '';
    dan99Total += `${dan} x 1 = ${dan*1}, `
    dan99Total += `${dan} x 2 = ${dan*2}, `
    dan99Total += `${dan} x 3 = ${dan*3}, `
    dan99Total += `${dan} x 4 = ${dan*4}, `
    dan99Total += `${dan} x 5 = ${dan*5}, `
    dan99Total += `${dan} x 6 = ${dan*6}, `
    dan99Total += `${dan} x 7 = ${dan*7}, `
    dan99Total += `${dan} x 8 = ${dan*8}, `
    dan99Total += `${dan} x 9 = ${dan*9}, `
    //구구단 식
    return dan99Total //반환변수명
    //return 아래 작성된 식은 실행되지 않음
}
console.log(dan99Func(7))
//alert(dna00Func(5))
//prompt(dna00Func(2))

//할인율 계산기
// KB 국민카드 5% 할인적용가 ?원
// 현대카드 10% 할인적용가 ?원
// 삼성카드 20% 할인적용가 ?원
//할인율 계산법 (100-5) / 100 = 0.95
//판매가 0.95
function cradFunc(cardType, discount){
    const card = ['국민카드','현대카드','삼성카드'] //카드사정보
    const price = 1051000; //원가
    const calc = (100-discount) / 100; //할인율 계산
    const totalPrice = price * calc; //할인가 계산
    const result = `${card[cardType]} ${discount}%할인적용가 ${totalPrice.toLocaleString('ko-kr')}원`; //출력결과
    return result //반환결과
}
//현대카드 10% 할인적용가 ?원
console.log(cradFunc(0,5))
console.log(cradFunc(1,10))
console.log(cradFunc(2,20))

// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user){
    return alert('hello ' +user)
}
//hello1('soyoung')

const hello2 = function(user){
    return alert('hello '+user)
}
//hello2('park')

// 익명함수 + 화살표함수(ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('hello '+user)
}
hello3('young');
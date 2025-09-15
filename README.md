# 자바스크립트
### 변수 ox
1. var 1num=10; (x)
2. var $num=10; (o)
3. var 100num=10; (x)
4. var num100=10; (o)
5. var test=10; (o)
6. var test=10; (o)
7. var str="hello"; (o)
8. var my name; (x)
9. var_name; (o)
10. var if; (x)
### 기초 개념 및 속성, 함수 종류 기록
* `var 변수명` : 수정 가능한 전역변수
* `let 변수명` : 수정 가능한 전역/지역 변수
* `const 변수명=대입값` : 수정 불가능한 상수(전역/지역 변수)
* **객체.속성** (o)
* **객체.속성.속성** (o)
* **객체.객체.속성** (x) 객체 2번 연속은 기본적으로 불가(DOM제외)
* **객체.함수()**
* **객체.속성.함수()**
* **객체.함수().속성**
* 자주 이용하는 기본 속성 : `length`
* 자주 이용하는 기본 함수 : `toLocaleString('국가코드')` , `typeof()`
* 공부용 기초 함수 : `prompt`, `confirm`
### **배열** 관리함수
* `객체.push()` : 배열의 끝 위치에 값 추가
* `객체.pop()` : 배열의 끝 위치에서 갑 1개 제거
* `객체.unshift()` : 배열의 시작 위치에 값 추가
* `객체.shift()` : 배열의 시작 위치에서 값 1개 제거
## 콜백함수 정리
### 매개변수없는 콜백함수 호출
* `DOM.addEventListener('이벤트','콜백함수')`
* `function 콜백함수(){ return 반복실행 }`

### 매개변수가 있는 콜백함수 호출
* `DOM.addEventListener('이벤트', ()=>{ 콜백함수(매개변수) })`
* `DOM.addEventListener('이벤트', function(){ 콜백함수(매개변수) })`
* `function 콜백함수(매개변수){ return 반복실행 }`

### 매개변수가 있는 콜백함수 호출 (클로저 활용)
* `DOM.addEventListener('이벤트', 콜백함수(매개변수))`
* `function 콜백함수(매개변수){ return function(){ 반복실행 } }`

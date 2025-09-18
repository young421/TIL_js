/* 적정체중 = (본인신장-100)*0.9
계산식) **적정체중 = (사용자가 입력한 키-100)*0.9
변수명 예) userHeight, userWeight, goals, result, normal_w */

/* 현재 키와 몸무게를 입력하고 (초과기준)
예) `120cm, 20kg` 초1 평균값
버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
최종목표 결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다. */

const userHeight = document.querySelector('#user_height')
const userWeight = document.querySelector('#user_weight')
const resultBtn = document.querySelector('#result_btn')
const totalResult = document.querySelector('#result')
console.log(userHeight, userWeight, resultBtn, totalResult)

resultBtn.addEventListener('click', () => {
const height = Number(userHeight.value);
const weight = Number(userWeight.value);
const normalWeight = (height - 100) * 0.9;
const goals = weight - normalWeight;

const resultMsg = [
    "키와 몸무게를 모두 입력해주세요!",
    "적정체중은 " + "kg 이며, 딱 맞습니다",
    "적정체중은 " + "kg 이며, " + "kg 초과되었습니다.",
    "적정체중은 " + "kg 이며, " + "kg 미달되었습니다."
];

totalResult.textContent = resultMsg[index];
});


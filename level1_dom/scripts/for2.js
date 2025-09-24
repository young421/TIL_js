// 중첩 for
// ul*2>li*5
// <ul></ul> <li></li> (x)
// <ul><li></li></ul> (o)
let ul = '';
let li = '';
for(let i=0; i<=2; i++){
    //ul = '<ul>'
    li = '';
    for(let j=0; j<5; j++){
        li += `<li>menu${j+1}</li>`
    }
    ul += `<ul>${li}</ul>`
}
console.log(ul)

// 고객 리뷰 초기 상태
// 상품문의 클릭 시 문의내용 보이기
// 고객리뷰 클릭 시 리뷰내용 보이기
const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')
console.log(tabContent,  tabTitle)

tabContent[1].style.display = 'none'

/* tabTitle[0].addEventListener('click', ()=>{
    contentsDisplayHide()
    tabContent[0].style.display = 'block'
})
tabTitle[1].addEventListener('click', ()=>{
    contentsDisplayHide()
    tabContent[1].style.display = 'block'
}) */

/* for(let i of tabTitle){ //객체정보만 가지고 있어서 인덱스 연결이 불가능
    i.addEventListener('click', ()=>{
        contentsDisplayHide()
        console.log(i)
        //tabContent[0].style.display = 'block'
    })
} */
//객체 정보와 서로 다른 객체를 연결할 인덱스 정보
//매개변수 순서대로 객체 -> 인덱스 -> 배열정보 (이름 설정은 자유)
tabTitle.forEach(function(obj, ind, arr){
    console.log(obj, ind, arr.length) //모든 정보 출력
    obj.addEventListener('click', ()=>{
        contentsDisplayHide()
        console.log(ind, obj) //클릭한 인덱스 정보만 출력
        tabContent[ind].style.display = 'block';
        titleDesignReset()
        obj.style.color = 'green';
        obj.style.backgroundColor = 'lightgray';
    })
})

function contentsDisplayHide(){
    for(let i of tabContent) i.style.display = 'none'
}
function titleDesignReset(){
    for(let i of tabTitle) {
        i.style.color = 'black'
        i.style.background = 'none'
    }
}
//todo.js
// 1. input 할 일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 할 일 추가하기
const listInput = document.querySelector('#list')
const listAddBtn = document.querySelector('#list_add')
const listWrapUl = document.querySelector('#list_wrap')
console.log(listInput, listAddBtn, listWrapUl)

listAddBtn.addEventListener('click', ()=>{
    //입력 안 하면 '할 일을 입력하세요' 메세지 출력
    listInput.value == '' ? alert('할일을 입력하세요') : toDoFunc();
})

listInput.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){listInput.value == '' ? alert('할일을 입력하세요') : toDoFunc();}
}) //버튼 클릭 안 하고 엔터만 쳐도 등록

function toDoFunc(){
    listWrapUl.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`;
    listInput.value = '';
    const toDoClose = document.querySelectorAll('li .close');
    console.log(toDoClose)
    //부모잡는속성 parentNode
    //삭제내장함수 remove()
    for(let i of toDoClose){
        i.addEventListener('click', ()=>{
            i.parentNode.remove();
        })
    }
    return console.log('할일 출력 테스트')
}


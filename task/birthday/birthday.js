//### Q. 당신의 생일은 몇월인가요?
//ex) 12월이라고 작성하고 아래 “탄생화와 꽃말은?” 버튼을 눌렀다면 아래와 같이 출력하기
//예) 12월의 탄생화는 포인세티아이고 꽃말은 축하, 감사입니다.

// 1. 생일 입력
// 2. 생일 입력 후 버튼 클릭 시 탄생화와 꽃말 등장

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

    const date = document.querySelectorAll('#date')
    const dateBtn = document.querySelector('#date_btn')
    const flowerMean = document.querySelector('.birth_flower')
    console.log(date, dateBtn, flowerMean)
    for(let i=1; i<=birthday_flower.length; i++){
        console.log(i)
    }
    console.log('----------------------')
    for(let j=1; j<32; j++){
        console.log(j)
    }

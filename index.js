
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];
console.log(num.indexOf(1));

//박스를 선택한 순서를 기록하는 배열 - Tracing Click
let selNum = [];
let selNumP = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;
console.log(shuffleFlag)


const boardInit =()=>{
    const board = document.querySelectorAll(".boardBox");
    for(let item of board) {item.innerHTML = '';}
    //console.log(board)
}
const showAll =()=>{
    let showA = document.querySelector(`#box${num.indexOf(1)}`)
    showA.innerHTML = '<img src="images/hart.png">'
}

//msg
const showMsg =(m)=> {
    document.querySelector('#msg').innerHTML = m
}

const heart =(n)=> {
    let emo = document.querySelector(`#box${n}`)
    emo.innerHTML = '<img src="images/hart.png">'
}
const boom =(n)=> {
    let emo = document.querySelector(`#box${n}`)
    emo.innerHTML = '<img src="images/boom.png">'
}

//board(show)
const show =(n)=>{
    if(shuffleFlag) {
        cnt++   // 배열 중복 제외로 카운트만 센다.
        selNum.push(n)
        selNumP.push(selNum[0])
        let result = selNumP.reduce((ac, v)=> ac.includes(v) ? ac:[...ac, v], []) // 즉시 배열 중복을 없앤다.

        console.log(n)
        console.log(selNum)
        console.log(selNumP)
        console.log(result)
        console.log("cnt : "+cnt)
        //console.log("selNum : "+selNum.pop())
        if(num.indexOf(1) == selNum.pop()) {
            boom(n)
            shuffleFlag = !shuffleFlag
            showMsg('폭탄발견! 패배하셨습니다!')
            alert('패배!')
        } else {
            heart(n)
            if(result.length == 8) {  // click 성공 횟수가 8이 되면 성공
                alert('성공!')
                showAll()
            }
        }
    } else {
        showMsg('폭탄이 섞이지 않았습니다! 폭탄을 섞어주세요!');
    }
}


// 폭탄섞기
const boxShuffle =()=>{
    shuffleFlag = !shuffleFlag; // shuffleFlag true
    showMsg('폭탄을 섞었습니다!');
    num.sort(()=> Math.random() - 0.5 );
    console.log(num.indexOf(1));
    console.log(shuffleFlag)
    boardInit();
    if(shuffleFlag == false) {
        showMsg('게임을 준비합니다!');
        shuffleFlag = !shuffleFlag;
    }
    selNum.length = 0;
    cnt = 0;

}

/* DOM이 로드된 후에 클릭이벤트 연결*/
// document.addEventListener("DOMContentLoaded", ()=>{
   
// });
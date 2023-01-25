/* 문자열 순회 */
let s = "토마토123"

/* 실습 : 회문인지 판별 */
 
/* 실습 : 문자열에 포함된 숫자의 합구하기*/
 
/* 여러줄 문자열 저장 */
s = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`
console.log(s)

/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인*/
let p, cnt = 0
let word = 'HTML'

while (true) {                  // while vs. for
    p = s.indexOf(word, p);   // 처음 위치: 102, 다음 위치: 134
    if(p == -1) break;

    cnt++;
    p += 1;

}
console.log("위 문자열 내 "+word+"의 개수 : "+cnt)                // -> 3


/* 문자열 슬라이싱*/
 
let w = s.substring(5, 10)
console.log(w)
let sw = s.slice(5, 10)
let minussw = s.slice(-5)   // slice는 substring과 유사하지만 마지막 문자부터 검사하는 -연산자 사용가능
console.log(sw)
console.log(minussw)

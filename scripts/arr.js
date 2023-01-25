/* 배열 선언 */
let arr1 = [1, 2, 3];
let arr2 = new Array()
console.log(arr1, arr2)

/* 배열 추가 삭제 :뒤에서 */
arr2.push('❤', '✔', '🎉')
console.log(arr1, arr2)
arr1.pop(), arr2.pop()
console.log(arr1, arr2)

/* 배열 추가 삭제 :앞에서 */
arr1.unshift('😎'), arr2.unshift('😎')
console.log(arr1, arr2)
arr1.shift(), arr2.shift()
console.log(arr1, arr2)

/* 배열 순회 */
for(i in arr2) {
    console.log(arr2[i])
}
for(i of arr2) {
    console.log(i)
}
/* 배열의 length 속성*/
console.log("arr2 배열의 길이 : "+arr2.length)
arr2.length = 1
console.log("arr2.length = 1 : "+arr2)

//배열 비우기
arr2.length = 0
console.log("arr2.length = 0 : "+arr2)

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',]    // js에서는 배열의 마지막에 쉼표를 찍어주는 것이 좋다.
console.log(typeof arr)
console.log("문자열 arr : "+String(arr))    // 문자열로

/* 문자열 split하면 배열반환*/
console.log(String(arr).split(','))         //다시 배열로

 
/* 배열 정렬 */
let num = [1,3,5,2,4];
num.sort(( a, b )=>{ return b - a });
console.log(num)

/* 배열 섞기*/
num.sort(()=> Math.random() - 0.5 );        // 배열 섞기 (return 값이 없을 때 중괄호{} 생략)
console.log(num)


 
 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union1 = [...setA, ...setB]
let union2 = setA + setB
console.log(union1, union2);

//교집합
let intersection = setA.filter((item)=> setB.includes(item));
console.log(intersection);

let setA0 = setA.map((item)=> item * 2);    // map은 기존 요소에 조건 mapping
console.log(setA0);

//차집합
let difference = setA.filter((item)=> !setB.includes(item));
console.log(difference);

//합집합 수정
union = [...difference, ...setB]
console.log(union)
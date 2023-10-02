// 데이터 타입, 연산자 실습

1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1-"1"
// 0 -연산자가 숫자와 문자열 사이에 놓이고 두 피연산자의 값이 숫자이면 문자열인 수는 숫자로 타입이 변환된다.
"코드"+"캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || false
// true
!false
// true

// 조건문 실습 1

if (1+1 === 2) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}    
// VM661:2 정답입니다
// undefined
if (true) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}    
// VM698:2 정답입니다
// undefined
if (!true) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}    
// VM708:4 틀렸습니다
// undefined
if (0) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}    
// VM722:4 틀렸습니다
// undefined
if (1) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}    
// VM739:2 정답입니다
// undefined





// 조건문 실습 2

const profile = {
  name:"철수",
  age:12,
  school: "다람쥐초등학교"
}
// undefined
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if(profile.age >= 20) {
  console.log("성인입니다")
}
else if(profile.age >=8) {
  console.log("학생입니다")
}
else if(profile.log >0) {
  console.log("어린이입니다")
}
else {
  console.log("잘못 들었습니다?")
}
// VM1962:5 학생입니다
// undefined
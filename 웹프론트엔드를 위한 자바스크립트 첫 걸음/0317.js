//0317 강의 요약

//[변수와 상수]
//변수의 설정 - let 사용, 자료형 선언 불필요
let color = "skyblue"
color = "yellow"

console.log(color);

let isCatOrDog; //카멜 표기법
console.log(typeof color); //자료형 확인 가능, 동적 타입 언어(값에 따라 자료형 변화)

//상수의 설정 - const 사용, 값 변경 불가능
const NAME = "Yewon"

//[자료형과 형 변환]
//원시 타입 자료형 : 한번에 하나의 값만을 가짐
//비원시 타입 자료형 : 한번에 여러 개의 값을 가짐

//정수형
let number = 20;
number = Infinity; //무한
number = NaN; //부정확한 연산

//문자열
let name = "Han";
let intro = `제 이름은 $(name)입니다.`; //역 따옴표, templete literal

console.log(intro);

//boolean형

//null형
//알 수 없는 값을 사용할 때

//형 변환
//자동 형변환
//곱하기 나누기 빼기 : 문자열을 숫자로
//더하기 : 숫자를 문자열로

//[자바스크립트의 연산자]
//비교 연산자
//=== : 자료형까지, == : 오직 값만을 비교
//!== : 자료형까지, != :
//연결 연산자 +
//null 변환 연산자
let num;
num = num ?? 20;
//num이 undefine이거나 null일 때 20 대입


//[함수와 지역변수, 외부 변수]
//즉시 실행 함수(IIFE) : 선언되지마자 즉시 실행되는 함수
(function(){
    console.log("즉시실행함수");
})();


//[스코프]
//var는 let과 달리, 같은 이름의 변수를 여러 번 생성 가능 -> 기존에 선언된 뱐수 무시
//var는 let과 달리, 함수 스코프이므로 해당 함수 내에서 사용 가능(let은 블록스코프)
//var 사용 자제

//[호이스팅]
//: 아직 선언되지 않은 함수나 변수들을, 해당 스코프의 맨 위로 끌어 올려 사용하는 작동 방식
//함수 호이스팅 : 함수 정의 구문을 호이스팅
//변수 호이스팅 : 변수의 선언문만 호이스팅(할당문은 호이스팅 되지 않음)
//var가 아닌 let과 const는 변수 호이스팅 불가능 why? 값이 할당되기 전까지 TDZ에 존재
//var는 변수 선언 완료 시 바로 메모리 할당
//TDZ(Temporal Dead Zone) : 일시적인 사각지대로, 변수를 사용하는 것을 허용하지 않는 공간
//>> 호이스팅 사용 자제
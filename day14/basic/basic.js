// 비동기 개념
// console.log("이미지 로딩 시작");

// setTimeout(() => {
//     console.log("이미지 로딩");
// }, 2000);

// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");
// console.log("다른 작업 수행");

//동기 방식 (URL이 움직임)

// 전체 페이지가 새로고침되면서 URL이 바뀜
// 사용자가 기다려야 하는 "blocking" 상태
// 전통적인 웹 방식 (form submit, 링크 클릭 등)

// 비동기 방식 (URL이 안움직임)

// 페이지는 그대로 있고 일부분만 업데이트
// 사용자가 계속 다른 작업을 할 수 있는 "non-blocking" 상태
// AJAX, fetch 등을 사용한 현대적 웹 방식

////////////////////////////////////////////////////////

// 콜백 함수
function sayHello(name, callback) {
    console.log(`안녕, ${name}`);

    setTimeout(() => {
        callback();
    }, 2000);
}

function sayHello2(name) {
    console.log(`[2]안녕, ${name}`);
}

sayHello("학생", () => {
    console.log("콜백 실행");
});

sayHello2("학생");

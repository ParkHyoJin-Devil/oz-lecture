const timerInputId = document.getElementById("timerInput");
const timerDisplayId = document.getElementById("timerDisplay");
const startTimerId = document.getElementById("startTimer");

// 타이머 시작 함수
function startTimer(seconds = 10) {
    let timerCount = seconds;

    timerDisplayId.innerHTML = "";

    if (isNaN(timerCount) || timerCount < 1 || timerCount > 10) {
        const errorSpan = document.createElement("span");
        errorSpan.className = "error";
        errorSpan.textContent = "유효한 숫자(1-10)를 입력하세요!";
        timerDisplayId.appendChild(errorSpan);
        return;
    }

    const span = document.createElement("span");
    timerDisplayId.appendChild(span);

    span.textContent = `타이머: ${timerCount}초`;

    var timeInterval = setInterval(() => {
        timerCount--;

        if (timerCount <= 0) {
            span.textContent = "타이머 종료!";
            clearInterval(timeInterval);
        } else {
            span.textContent = `타이머: ${timerCount}초`;
        }
    }, 1000);
}

const TimerPromise = new Promise((resolve, reject) => {
    let promiseResult = "작업성공!";
    let promiseResult2 = "작업실패!";
    resolve(promiseResult);
    reject(promiseResult2);
});

// 타이머 시작 버튼 클릭 이벤트 적용
const handleTimerStart = () => startTimer(timerInputId.value);

//////////////////////////////////////////////////////////////////////////////

// <!-- 3. **기능 요구사항**
//     - **목표**: 사용자가 HTML 입력란에 입력한 초(1~10)로 카운트다운 타이머를 구현하고, HTML 화면에 결과 출력.
//     - **프로그램 흐름**:
//         - 제공된 HTML의 입력란(`#timerInput`)에 숫자 입력, 시작 버튼(`#startTimer`) 클릭.
//         - 유효한 입력(1~10) 시 타이머 시작, `#timerDisplay`에 초 단위로 카운트다운 표시.
//         - 유효하지 않은 입력(숫자 아님, 1~10 외, 빈 값) 시 `#timerDisplay`에 에러 메시지 출력.
//         - 타이머 종료 시 `#timerDisplay`에 "타이머 종료!" 출력.
//         - 타이머 실행 중 시작 버튼 비활성화, 종료 후 재활성화.
//         - 모든 출력은 HTML 화면(`#timerDisplay`)에서 표시.
//     - **출력 정보**:
//         - HTML:
//             - 진행: `타이머: X초`
//             - 종료: `타이머 종료!`
//             - 에러: `유효한 숫자(1-10)를 입력하세요!` (`.error` 클래스로 빨간색 표시)
//     - **구현 요구사항**:
//         - **변수 선언**: `var`, `let`, `const` 각각 최소 1회 사용(예: `const MAX_TIME = 10`, `let timerCount`, `var timerMessage`).
//         - **반복문**: `setInterval`로 타이머 구현, 입력 처리는 `click` 이벤트 리스너 사용.
//         - **함수**: 함수 선언문(예: `function startTimer(seconds)`)으로 타이머 로직 구현, 매개변수 기본값 사용(예: `seconds = 10`).
//         - **조건문과 연산자**: `if`로 입력 유효성 검사, `isNaN`, `>=`, `<=`, `&&` 사용.
//         - **비동기 처리**: `setInterval`로 타이머 구현, `clearInterval`로 종료.
//         - **DOM 조작**:
//             - 입력값: `document.getElementById("timerInput").value`
//             - 출력: `document.getElementById("timerDisplay").textContent`
//             - 버튼 비활성화: `document.getElementById("startTimer").disabled = true`
//             - 에러 스타일: `document.getElementById("timerDisplay").classList.add("error")`
//         - **출력 예시**:

//             ```
//             [입력: 5, 버튼 클릭]
//             HTML: 타이머: 5초
//             ...
//             HTML: 타이머 종료!
//             [입력: abc 또는 11]
//             HTML: 유효한 숫자(1-10)를 입력하세요! (빨간색)

//             ```

//     - **구현 선택**:
//         - 입력 유효성 검사는 `if` 또는 `switch` 자유.
//         - 부트스트랩 클래스(`form-control`, `btn-primary`) 유지 또는 커스텀.
//         - CSS로 레이아웃, 색상, 폰트 등 자유롭게 개선(예: 타이머 색상 애니메이션, 버튼 호버 효과).
// 4. **실행 환경**
//     - 브라우저에서 `index.html` 실행.
//     - 개발자 도구(F12)로 디버깅 가능하지만, 출력은 HTML 화면에서만 확인.
// 5. **제출 방식**
//     - GitHub 레포지토리에 프로젝트 업로드.
//     - 레포지토리 링크 제출.
//     - `README.md`에 프로젝트 설명, 실행 방법, 디자인 커스텀 내역 포함.

// ## 주의사항

// - **JavaScript 문법**: `var`, `let`, `const`, 기본 자료형, 연산자, 조건문, 반복문, 함수, 배열, 객체, `setInterval`만 사용. DOM 조작 필수. 콘솔 출력 금지.
// - **코드 가독성**: 들여쓰기와 주석(`//`)으로 로직 설명(예: `// 타이머 시작`, `// 입력 유효성 검사`).
// - **테스트**: 입력, 타이머 출력, 버튼 비활성화/활성화, 에러 메시지가 HTML 화면에서 정확히 작동하는지 확인.
// - **입력 처리**: 입력란 값은 `Number()`로 변환, 유효하지 않은 입력(빈 값, 1~10 외) 처리 필수. -->

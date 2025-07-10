const MAX_STARS = 10;
var stars = "";

function promptScore() {
    // 사용자 입력
    let inputStr = prompt("점수를 입력하세요.");
    let input = Number(inputStr);
    console.log("input:", input);
    return input;
}

function printStars(count = 1) {
    for (let i = 0; i < count; i++) {
        stars = stars + "*";
    }

    console.log(stars);
}

function main() {
    let input;

    while (true) {
        input = promptScore();

        if (isNaN(input) || input < 1 || input > 10) {
            console.log(`Invalid input! Enter a number between 1 and 10.`);
            continue;
        } else break;
    }

    printStars(input);
}

main();

// ## 기본 과제 요구사항

// 1. **JavaScript 파일 (star.js)**
//     - 브라우저 콘솔에서 실행 가능한 JavaScript 파일을 작성하세요.
//     - **목표**: 사용자가 `prompt()`로 입력한 숫자(1~10)만큼 별()을 한 줄에 출력.
//         - **프로그램 흐름**:
//             - 사용자가 숫자를 입력(1~10).
//             - 입력한 숫자만큼 별을 한 줄에 출력(예: 입력 5 → `****`).
//             - 유효하지 않은 입력(숫자 아님, 1~10 외)은 에러 메시지 출력 후 재입력 요청.
//             - 입력이 유효하면 별 출력 후 프로그램 종료.
//         - **출력 정보**:
//             - 유효하지 않은 입력: `Invalid input! Enter a number between 1 and 10.`
//             - 유효한 입력: `[별 출력]` (예: `****`)
//     - **기능 요구사항**:
//         - **변수 선언**:
//             - `var`, `let`, `const`를 각각 최소 1회 사용.
//             - 예: `const maxStars = 10;` (최대 별 개수), `let input` (사용자 입력), `var stars` (별 문자열).
//         - **반복문**:
//             - `while` 또는 `do while`을 사용하여 유효한 입력을 받을 때까지 반복.
//             - `for`를 사용하여 입력된 숫자만큼 별() 추가.
//             - `continue`로 유효하지 않은 입력 건너뛰기.
//             - `break`로 유효한 입력 후 루프 종료.
//         - **함수**:
//             - **함수 선언문**: 별 출력 함수(예: `function printStars(count)`).
//                 - 입력된 숫자만큼 별을 문자열로 만들어 콘솔 출력.
//             - **매개변수 기본값**: 입력이 0 또는 음수일 경우 기본값 1 사용(예: `count = 1`).
//         - **조건문과 연산자**:
//             - `if`/`else`로 입력값 검사(숫자인지, 1~10 범위인지).
//             - 비교 연산자(`>=`, `<=`, `!isNaN`)와 논리 연산자(`&&`) 사용.
//         - **입출력**:
//             - `prompt()`로 숫자 입력받음.
//             - 콘솔 출력 형식:

//                 ```
//                 Enter the number of stars (1-10):
//                 [입력: abc] Invalid input! Enter a number between 1 and 10.
//                 [입력: 5] *****

//                 ```

//     - **구현 선택**:
//         - 반복문은 `while` 또는 `do while` 선택 가능.
//         - 별 문자열 생성은 `for` 루프 또는 문자열 반복(`"*".repeat()`) 사용 가능(단, `repeat`은 간단한 대안으로 허용).
//         - 입력 검사 로직은 `if` 또는 `switch`로 자유롭게 설계.
// 2. **실행 방법**
//     - JavaScript 파일을 작성 후, 브라우저 개발자 도구(F12 → Console)에서 코드를 복사/붙여넣기하여 실행하거나, 간단한 HTML 파일에 `<script src="star.js"></script>`를 추가하여 실행:
//         - HTML은 제출에 포함하지 않아도 됩니다.
// 3. **파일 구조**
//     - 프로젝트 폴더를 구성:

//         ```
//         star-printer/
//         ├── star.js

//         ```

// ## 주의사항

// - **JavaScript 문법**: 변수(`var`, `let`, `const`), 기본 자료형, 연산자, 조건문(`if`, `else if`, `else`, `switch`), 반복문(`while`, `do while`, `for`, `for...in`, `break`, `continue`), 함수(선언문, 표현식, 화살표, 기본값, `...rest`)만 사용하세요. 객체는 도전 과제에서 변수 선언 수준으로 제한. DOM 조작, HTML, Node.js는 사용하지 마세요.
// - **실행 환경**: 브라우저 콘솔(F12)에서 실행하거나, 간단한 HTML 파일로 테스트하세요.
// - **코드 가독성**: 코드는 들여쓰기를 통해 가독성을 높이고, 주석(`//`)으로 주요 코드(반복문, 함수, 조건문)를 설명하세요.
// - **테스트**: 브라우저 콘솔에서 `star.js`를 실행하여 입력, 유효성 검사, 별 출력이 정확히 작동하는지 확인(예: 입력 5 → `****`, 입력 abc → `Invalid input!`).
// - **입력 처리**: `prompt()`는 문자열을 반환하므로 `Number()`로 변환. 입력은 1~10으로 제한, 유효하지 않은 입력은 에러 메시지 출력.

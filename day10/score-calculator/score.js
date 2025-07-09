//사용자 입력
let inputStr = prompt("점수를 입력하세요.");
console.log(inputStr);
let input = parseInt(inputStr);
console.log(input);

const MAX_SCORE = 105;
let score = input;
var grade;

//         - **단항 부정**: 조건 반전(예: `!isNaN(score)`).
if (isNaN(input) || score < 0 || score > 100) {
    console.log(`Invalid score! Please enter a number between 0 and 100.`);
    window.close();
} else if (!isNaN(score)) {
    console.log("Valid number entered!");
}

// 최종점수 계산
//         - **단항 산술**: 점수 조정(예: `score++`로 1점 증가 후 5점 보너스 추가).
score++;
score = score + 5;

//         - **복합 대입**: 점수 스케일링(예: `score *= 1.1`로 10% 가산).
score *= 1.1;
console.log("Final Score: ", score);

//     - **복잡한 조건**:
//         - 보너스 점수와 스케일링 후 점수가 100을 초과하면 100으로 제한(예: `if (score > 100) score = 100;`).
if (score > 100) {
    score = 100;
}
console.log("Final Score: ", score);

// 등급 결정 (if문)
if (score >= 100) {
    grade = "S";
} else if (score >= 90 && score < 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score < 60) {
    grade = "F";
}

console.log("Grade: ", grade);

//합격/불합격 여부 결정 (삼항 연산자)
let status = score >= 60 ? "Pass" : "Fail";
console.log("Status: ", status);

// 등급에 따른 console.log() 출력 (switch문)
//         - `switch`에 특수 case 추가: 점수가 정확히 100이면 메시지 `Perfect Score!` 출력(A 등급 메시지 대신).

let Message;

switch (grade) {
    case "S":
        if (score === 100) Message = `Perfect Score!`;
        else Message = "Super!!";

        break;
    case "A":
        Message = "Excellent work!";
        break;
    case "B":
        Message = "Good job!";
        break;
    case "C":
        Message = "Satisfactory performance.";
        break;
    case "D":
        Message = "Needs improvement.";
        break;
    case "F":
        Message = "Please try harder!";
        break;
    default:
        break;
}

console.log("Message: ", Message);
// ## 도전 과제 (선택)

// 기본 과제를 완료한 학생들은 추가 연산과 조건 처리를 연습하세요.

// 1. **추가 기능 구현**
//     - **출력 형식**:
//         - 유효하지 않은 입력:

//             ```
//             Invalid score! Please enter a number between 0 and 100.

//             ```

//         - 유효한 입력(예: 입력 90):

//             ```
//             Final Score: 100
//             Grade: A
//             Status: Pass
//             Message: Perfect Score!

//             ```

//     - **구현 선택**:
//         - 유효성 검사는 `if` 또는 삼항 연산자로 가능.
//         - 점수 조정은 `++`, `=`, `+=` 등 조합 자유.
//         - `switch` 문에서 `score === 100`을 별도 `case`로 처리하거나 A 등급 내에서 조건 추가 가능.

// ## 주의사항

// - **JavaScript 문법**: `var`, `let`, `const`, 연산자(이항 산술, 단항 산술, 단항 부정, 복합 대입, 비교, 논리, 삼항), 조건문(`if`, `else if`, `else`로 등급 부여, `switch`로 메시지 출력)만 사용하세요. 배열, 객체, 루프, 함수, DOM 조작은 사용하지 마세요.
// - **실행 환경**: 브라우저 콘솔(F12)에서 실행하거나, 간단한 HTML 파일로 테스트하세요. Node.js는 사용하지 않습니다.
// - **코드 가독성**: JavaScript 코드는 들여쓰기를 통해 가독성을 높이고, 주석(`//`)으로 주요 코드(연산자 사용, 등급 부여, 메시지 출력)를 설명하세요.
// - **테스트**: 브라우저 콘솔에서 `score.js`를 실행하여 최종 점수, 등급, 합격 여부, 메시지가 정확히 출력되는지 확인(예: 입력 85 → `Final Score: 90`, `Grade: A`, `Status: Pass`, `Message: Excellent work!`).—“ 입력 처리**: `prompt()`는 문자열을 반환하므로 `Number()`로 변환하세요. 도전 과제에서는 유효성 검사 필수.

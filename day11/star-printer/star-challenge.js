const MAX_STARS = 10;

function promptScore() {
    // 사용자 입력
    let inputStr = prompt("점수를 입력하세요.");
    let input = Number(inputStr);
    console.log("input:", input);
    return input;
}

function Pattern(count) {
    var stars = "";
    this.pattern = [];

    for (let i = 0; i < count; i++) {
        stars = "";
        for (let j = i; j < count; j++) {
            stars = stars + "*";
            this.pattern[i] = stars;
        }
    }
}

const printReverseStars = function (count) {
    // var stars = "";

    // for (let i = count; i > 0; i--) {
    //     stars = "";

    //     for (let j = 0; j < i; j++) {
    //         stars = stars + "*";
    //     }

    //     console.log(stars);
    // }

    const starPattern = new Pattern(count);

    for (let star in starPattern) {
        console.log(starPattern[star]);
    }
};

const printSquare = (count) => {
    var stars = "";

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            stars = stars + "*";
        }
        stars = stars + "\n";
    }

    console.log(stars);
};

function printMultipleStars(count1, count2) {
    var stars = ["", ""];

    for (let i = 0; i < count1; i++) {
        stars[0] = stars[0] + "*";
    }

    for (let i = 0; i < count2; i++) {
        stars[1] = stars[1] + "*";
    }

    console.log(`Stars for count ${count1}:`, stars[0]);
    console.log(`Stars for count ${count2}:`, stars[1]);

    //             Stars for count 2: **
    //             Stars for count 3: ***
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

    printReverseStars(input);
    printSquare(input);
    printMultipleStars(4, 3);
}

main();

// ## 도전 과제 (선택)

// 기본 과제를 완료한 학생들은 다양한 함수 정의와 추가 패턴 출력을 연습하세요.

// 1. **추가 기능 구현**
//     - **다양한 함수 정의**:
//         - **함수 표현식**: 역순 별 출력(예: `const printReverseStars = function(count)`).
//             - 입력된 숫자만큼 별을 역순으로 출력(예: 입력 3 → `**`, `*`, ).
//         - **화살표 함수**: 사각형 패턴 출력(예: `const printSquare = (count) => {...}`).
//             - 입력된 숫자만큼 별을 정사각형 형태로 출력(예: 입력 3 → `**\n***\n***`).
//     - **for...in 사용**:
//         - 패턴 정보를 객체로 저장(예: `{ pattern1: "*****", pattern2: "***" }`).
//         - `for...in`으로 객체 속성을 순회하며 패턴 출력.
//     - **...rest 사용**:
//         - 여러 숫자를 받아 각 숫자에 대해 별 출력(예: `printMultipleStars(...counts)`).
//         - 예: `printMultipleStars(2, 3)` → `*`와 `**` 출력.
//     - **출력 형식**:
//         - 역순 별:

//             ```
//             ***
//             **
//             *

//             ```

//         - 사각형 패턴:

//             ```
//             ***
//             ***
//             ***

//             ```

//         - 여러 숫자:

//             ```
//             Stars for count 2: **
//             Stars for count 3: ***

//             ```

//     - **구현 선택**:
//         - 역순 별은 `for` 또는 `while`로 구현 가능.
//         - 사각형 패턴은 중첩 루프 또는 문자열 반복 자유.
//         - `...rest`로 여러 숫자 처리 시 입력 방식(하드코딩 또는 추가 `prompt()`) 자유.
// 2. **도전 과제 파일 구조**
//     - 동일한 `star.js`에 추가 기능을 포함.
//     - 제출 폴더명에 "challenge"를 추가: `이름_학번_JavaScript과제_challenge.zip`

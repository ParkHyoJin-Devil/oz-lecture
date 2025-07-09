// 삼항 연산자
let score = 90;
let grade = score >= 90 ? "A+" : "A";
console.log(grade);

// if (score >= 90) {
//     grade = "A+";
// } else {
//     grade = "A";
// }

//////////////////////////////////////////////////////////

let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log(`isMathLowAvg`, isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log(`isEnglishLowAvg`, isEnglishLowAvg);

let avgMathGrade = isMathLowAvg ? "수학점수 평균 이하" : "수학점수 평균 이상";
console.log(`avgMathGrade`, avgMathGrade);

let avgEnglishGrade = isEnglishLowAvg ? "영어점수 평균 이하" : "영어점수 평균 이상";
console.log(`avgEnglishGrade`, avgEnglishGrade);

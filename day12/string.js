// String.length
const pw = "123";
console.log(pw.length);
if (pw.length < 4) {
    console.log("최소 4자리 입력하세요.");
}

// String.includes()
const email = "test@naver.com";
console.log(email.includes("@"));

if (!email.includes("@")) {
    // @가 포함되어 있지 않으면,
    console.log("이메일 형식 확인하세요");
}

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
console.log(email[4]);
console.log(email.indexOf("@"));
console.log(email.indexOf("dsfsdf")); // -1
for (let i = 0; i < 20; i++) {
    if (email[i] === undefined) break;

    console.log(email[i]);
}

if (email.indexOf("@") < 0) {
    console.log("이메일 형식 확인하세요");
}

//window.location

//String.trim()
const textarea = `    배고프다!     `;
console.log("textarea", textarea);
console.log("textarea", textarea.trim());

//String.replace()
//String.replaceAll()
// regex 정규표현식 활용하여 replace 사용도 가능
const needToDelDot = ".안녕하세요. 나는 태구와 함께 삽니다.....";
console.log("needToDelDot", needToDelDot);
console.log("needToDelDot", needToDelDot.replace(".", ""));
console.log("needToDelDot", needToDelDot.replaceAll(".", "|"));

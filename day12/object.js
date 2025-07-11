console.log("객체 실습");

const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong",
    },
    age: 20,
    isAdult: true,
    getFullName: function (isKorean = false) {
        const fullName = isKorean
            ? `${this.name.lastName} ${this.name.firstName}`
            : `${this.name.firstName} ${this.name.lastName}`;
        return fullName;
    },
    printInfo: function () {
        console.log("printInfo");
        console.log(`name: ${this.name.firstName} ${this.name.lastName}`);
        console.log(`age: ${this.age}`);
        console.log(`isAdult: ${this.isAdult}`);
    },
};
console.log(person);

// person의 age, isAdult 조회
console.log("객체에서 . 사용하여 접근");
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);

console.log("객체에서 [key] 사용하여 접근");
let age2 = person["age"];
console.log("age2 :", age2);
let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log("isAdult2 :", isAdult2);

// 객체에 키가 어떤값이 왔는지 모르지만 값을 꺼내고 싶을 때 []를 사용한다.
let keys = [];
for (const key in person) {
    keys.push[key];
}
console.log(keys);
console.log(keys[0]);
const keyFirstValue = person[keys[0]];
for (const key of keys) {
    console.log("key", key);
    console.log("person[key]", person[key]);
}

// 객체내의 함수 사용하기
person.printInfo();
const fullName = person.getFullName(true);
console.log("fullName :", fullName);

// 객체에 속성 추가
person.like = "apple";
person.korerAge = 22;
person.likes = ["taegu", "coffee", 2, true];
console.log(person);

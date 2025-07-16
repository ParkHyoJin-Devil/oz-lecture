const jsonString = `{
    "name": "지민",
    "age": 22

}`;

// const jsonObj = JSON.parse(jsonString);
// console.log(jsonObj.name);
// console.log(jsonObj.age);

const { name, age } = JSON.parse(jsonString);
console.log(name);
console.log(age);

// const jsonObj = {
//     name: "지민",
//     age: 22,
// };
// console.log(jsonObj);

const jsonStringArr = `[
    {
        "id":1,
        "name": "혜진"
    },
    {
        "id":2,
        "name": "민수"
    }
]`;

const users = JSON.parse(jsonStringArr);
console.log(jsonStringArr);
console.log(users);

//const names = ["혜진", "민수"];

// for문 사용
const nameFor = [];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    nameFor.push(user.name);
}

console.log(nameFor);

// Array.map() 사용
const nameMap = users.map((user) => {
    return user.name;
});

console.log(nameMap);

// Array.map + spread 연산자
const namesMapSp = users.map(({ name }) => name);
console.log(namesMapSp);

// JSON.stringify()
const namesMapJsonString = JSON.stringify(nameMap);
console.log(namesMapJsonString);
const jsonString3 = `{
    "name": "지민",
    "age": 22
}`;
const jsonObj3 = JSON.parse(jsonString3);
console.log("jsonObj3", jsonObj3);
const jsonObj3String = JSON.stringify(jsonObj3);
console.log("jsonObj3String", jsonObj3String);

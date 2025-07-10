const person1 = {
    name: "taem",
    age: 33,
};

const person2 = {
    name: "taegu",
    age: 3,
};

const person3 = {
    name: "sh",
    age: 33,
};

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    };
}

const prsonA = new Person("taem", 33);
const prsonB = new Person("taegu", 3);

console.log(`prsonA.name`, prsonA.name);
console.log(`prsonA.age`, prsonA.age);
prsonA.greet();

prsonB.greet();

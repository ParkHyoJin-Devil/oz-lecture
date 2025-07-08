const NAME = "박효진";
var age = 20;
var age = 30;
age = 37;
let hobbies = ["독서", "게임", "코딩", null, undefined];
let profileObj = { name: NAME, age: age, isStudent: true, email: null };

let templatString0 = `나의 이름은 ${NAME}입니다.` + "\n" + "나이는\t" + age + "\t입니다.";
console.log(templatString0);

let templatString1 = "취미는 " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2];
console.log(templatString1);
console.log(typeof hobbies[0]);
console.log(typeof profileObj.isStudent);

let empty0 = null;
let empty1;

console.log(empty0 === empty1);
console.log(`Name: ${profileObj.name}, Age: ${profileObj.age}`);
console.log(typeof hobbies[3]);
console.log(typeof hobbies[4]);
console.log(profileObj.email);

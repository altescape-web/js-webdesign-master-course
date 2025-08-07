let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);

const  y = 30;

const obj = {name: "Max"}
console.log(obj.name);

obj.name = 'Tipok';
console.log(obj.name);

const  arr = [1, 2, 3];
console.log(arr);

arr.push = (4);
console.log(arr);

let a;
const b = 10;

let c;
c = 5;
console.log(c);

/*Переменная в блоке не может работать вне его пределов. Т.е. если вывод вывести за скобки, то будет ошибка*/
if (true){
    let blockVar = 'Я в блоке!';
    console.log(blockVar);
}

/*Объявление глобальной переменной*/
let globalVar = 'Я - глобальная переменная';
function foo(){
    console.log(globalVar)
}
foo();

function myFunction(){
    //'use strict';
    e = 20;
}
myFunction();

let f = 100;
if (true){
    let f = 200;
    console.log(f);
}
console.log(f);

/*
Деструктуризация позволяет извлекать значения из объектов или массивов в одтельную переменную*/
const  person = {userName: 'Alisa', userAge: 25}; //Объект
const {userName, userAge} = person;
console.log(userName);
console.log(userAge);

const numbers = [1, 2, 4]
const [first, second] = numbers;
console.log(first);

/*Типы данных и переменные*/
let personName = 'Елена';
let personAge = 25;
let isStudent = true;
let personData = {name: 'ALise', personAge: 25};

/*2 варианта вывода данных*/
console.log('Тип personName: ' + typeof personName,
    '\nТип personAge: ' + typeof personAge,
    '\nТип isStudent: ' + typeof isStudent,
    '\nТип personData: ' + typeof personData )

console.log(`personName: ${typeof personName}
personAge: ${typeof personAge}
isStudent: ${typeof isStudent}
personData: ${typeof personData}`)

const PI = 3.14;
let radius = 5;
let area = PI * radius * radius;
console.log(area);

//Финальный пример для закрепления
//Объект
const user = { name: 'Evgen', age: 30, prof: 'Developer'}
//Деструктуризованный объект
const { name: peopleName, age: peopleAge, prof: peopleProf} = user;
console.log(peopleName);

document.getElementById('1').textContent = `Имя: ${peopleName}`;
document.getElementById('2').textContent = `Возраст: ${peopleAge}`;
document.getElementById('3').textContent = `Профессия: ${peopleProf}`;

document.getElementById('all').innerHTML += `
<p>Имя: ${peopleName}</p>
<p>Возраст: ${peopleAge}</p>
<p>Профессия: ${peopleProf}</p>
`;

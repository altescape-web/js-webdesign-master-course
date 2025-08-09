let a = 5;
let b = 3;
let result = a + b;

//a и b - это операнды, а знак плюс - оператор

//Сложение
let sum = a + b;
let summa = 5 + 3;
let text = "Привет " + "Мир!";
console.log(text);

//Вычитание
let difference = 10 - 4;
console.log(difference);

//Умножение
let product = 7 * 2;
console.log(product);

//Деление
let quotient = 20 / 5;
console.log(quotient);

//Остаток от деления
let remainder = 10 % 3;
console.log(remainder);

//Возведение в степень
let power = 2 ** 3;
console.log(power);

//Оператор инкремента (увеличивает значение на 1)
let inc = 5;
inc++;
console.log(inc);

//Оператор декремента (уменьшает значение на 1)
let dec = 8;
dec--;
console.log(dec);

//Унарный минус (меняет знак числа на противоположный)
let num1 = 10;
let negNum = -num1;
console.log(negNum);

//Унарный плюс (здесь преобразую строку в число)
let str = '123';
let num2 = +str;
console.log(typeof str, typeof num2);

//Операторы присваивания
let x;
x = 10;
console.log(x);
x = 20;
console.log(x);

let num3 = 5;
num3 += 4;
console.log(num3);

let txt = 'Это текст. ';
console.log(txt);
txt += 'Привет!';
console.log(txt);

//В index.html в div с классом text-block будет добавлен текст
/*document.querySelector('.text-block').innerHTML += `
<p>Третий блок текста</p>
<small>Заключение</small>
`*/

let y = 10;
y -= 4;
console.log(y);

let c = 7;
c *= 2;
console.log(c);

let d = 20;
d /= 5;
console.log(d);

let e = 10;
e %= 3;
console.log(e);

let f = 2;
f **= 3;
console.log(f);

let g = 10;
let h = 3;
console.log(g + h);
console.log(g - h);
console.log(g % h);
console.log(g ** h);

//Объект Math
let sqrt = Math.sqrt(16);
console.log(sqrt);

const PI = Math.PI;
console.log(PI);

let random = Math.random();
console.log(random);

//Приоритет операторов (как в математике)
let firstResult = 10 + 5 * 2;
console.log(firstResult);

//Операторы сравнения
console.log(5 == '5');
console.log(5 != '5');
console.log(5 === '5');
console.log(5 === 5);

console.log(5 !== 5);
console.log(5 !== '5');

console.log(10 < 5);
console.log(10 >= 10);

//Логические операторы
// && - и
console.log(true && false);

// || - или
console.log(true || false);

// ! - не
console.log(!true);

//Тернарный оператор
let age = 19;
let peopleStatus = age >= 18 ? 'Взрослый' : 'Ребёнок';
console.log(peopleStatus);

//Оператор нулевого слияния ?? возвращает правое значение, если левый равен null или не определён
let value = null;
let finalResult = value ?? 'Значение по умолчанию';
console.log(finalResult);

//Оператор опциональной цепочки ?. - позволяет обращаться к свойствам объекта, если они null или undefined
let user = {name: 'Lexa', age: 30};
console.log(user.age?.toString());

//Оператор логилического "Или" с присваиванием
let k = 0;
k ||= 10;
console.log(`Оператор ||= ${k}`);

//Оператор логического "И" с присваиванием. Присваивает значение правого оператора, если левый истинен
let l = 5;
l &&= 10;
console.log(`Оператор &&= ${l}`);

//Оператор нулевое слияние с присваиванием. Присваивает значение правого оператора, если левый null или undefined
let m = null;
m ??= 10;
console.log(`Оператор ??= ${m}`);

//typeof
console.log(typeof 42);
console.log(typeof 'Привет');
console.log(typeof true);

//Является ли объект экземпляром класса
class User {
};
let people = new User();
console.log(people instanceof User);

//void выполняет выражение и возвращает undefined
console.log(void 42);

// , позволяет выополнять несколько выражений возвращая результат последнего
let j = (1, 2, 3);
console.log(j);

let labor = {name: 'Sanya', age: 30};
console.log('age' in labor);

//delete - удаляет свойство из объекта
let worker = {name: 'Stepan'};
delete worker.name;
console.log(worker);

//new создаёт новый экземпляр объекта
class Workman {
};
let workman = new Workman();
console.log(workman);

//Позволяет расширить доступные для итерации элементы
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(numbers);
console.log(newNumbers);

function sumFunction(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sumFunction(1, 2, 3)); //функция считает сумму всех переданных в качестве аргументов чисел
console.log(sumFunction(1, 2, 3, 4, 5));

//Вывод нужных данных из файла data.json
/*async function fetchData(){
    let response = await fetch('data.json');
    let data = await response.json();
    console.log(data.employees[1].lastName);
}
fetchData();*/


//await приостанавливает выполнение функции, пока не будет выполнена полная загрузка данных (например по API)
async function fetchDataHTML() {
    try {
        let response = await fetch('data.json');

        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }

        let data = await response.json();

        let outputElement = document.getElementById('root');

        data.employees.forEach(employee => {
            let employeeElement = document.createElement('p');
            employeeElement.textContent = `Сотрудник: ${employee.firstName} ${employee.lastName}`;
            outputElement.appendChild(employeeElement);
        })

    } catch (error) {
        console.error('Ошибка!!!', error);
        //console.log('Ошибка!!!', error);
    }
}

fetchDataHTML();




























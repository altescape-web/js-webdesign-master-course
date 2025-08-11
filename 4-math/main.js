//Math - встроенный объект JS, который предоставляет математические функции и константы
console.log(Math);

console.log(Math.PI);
console.log(Math.E);

//Округление чисел
console.log(Math.round(4.7));
console.log(Math.floor(4.9));

//Степени и корни
//2 в степени 3
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));

//Рандом (случайные числа)
console.log(Math.random()); // Генерирует случайное число от 0 до 1

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1)
}
console.log(getRandom(1, 500));

//Тригонометрия
console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));
console.log(Math.tan(Math.PI / 4));

//Логорифмы и экспаненты
console.log(Math.log(10));
console.log(Math.log10(100)); //Логарифм 10 от 100
console.log(Math.exp(2));

//Абсолютные значения
console.log(Math.abs(-5));
console.log(Math.hypot(3, 4));







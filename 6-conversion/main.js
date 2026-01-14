// 1. Явное преобразование

// 1.1 Преобразование в строку
console.log(typeof String(123));
console.log(typeof 123);
console.log(String(123));
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(String ([1, 2, 3]));

// 1.2 Преобразование в число
console.log(typeof '123');
console.log(typeof 123);
console.log(typeof Number('123'));
console.log(Number('abc'));
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

// 1.3 Преобразование в булево
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean('')); //Пустая строка всегда false, что-нибудь внутри будет true
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([])); //Массив пустой - true
console.log(Boolean({})); //Объект пустой, но он есть - true

// 2. Неявное преобразование

// 2.1 Преобразование в строку. Оператор + преобразует в строку
console.log('5' + 2);
console.log(typeof ('5' + 2));
console.log('5' + true);
console.log('5' + null);

// 2.2 ( - * / ) -  Вычитание, умножение и деление. Преобразование строк в число
console.log('10' - 2);
console.log('10' * 2);
console.log('abc' / 2);

// 2.3 (&& || !) Логические операции. Эти операторы используют булево значение
console.log(0 || 'Привет');
console.log(1 || 'Привет');

console.log('Приветики' || 1);
console.log('Приветики' || 0);

//Если 0, то возвращается первое значение, если 1, то второе
console.log(0 && 'Привет');
console.log(1 && 'Мир');

console.log(!''); //true

// 2.4 (== и ===) Сравнение типов
console.log(5 =='5');
console.log(5 ==='5');
console.log(null == undefined);
console.log(null === undefined);

let x = 'Владимир',
    y = 15,
    z = true;

console.log(`
    x (${x}): ${typeof x}
    y (${y}): ${typeof y}
    z (${z}): ${typeof z}
`);

//Практический пример
const  form = document.querySelector('#userForm');
const  formResult = document.querySelector('#result');
const formSubmit = (e) => {
    e.preventDefault();
    //console.log('Форма отправлена');

    let getValue = new FormData(e.target).get('value').trim();

    //Проверка, что пользователь ввёл данные перед отправкой
    if (!getValue) {
        alert('Введите данные!')
        return; //Чтоб пустая форма не отправлялась
    }

    const parseValue = (value) =>
        value === 'true' ? {value: true, type: 'boolean'} :
            value === 'false' ? {value: false, type: 'boolean'} :
                !isNaN(value) ? {value: Number(value), type: 'nunber'} :
                    {value, type: 'string'};


    const {value, type} = parseValue(getValue);

    const resultParagraph = document.createElement('p');
    resultParagraph.innerHTML = `
    Значение: <span class="conversion-value">${value}</span> |
    Тип: <span class="conversion-type">${type}</span>
    `;

    formResult.prepend(resultParagraph);

    e.target.reset(); //Очистка формы при отправке данных
}

form.addEventListener('submit', formSubmit);







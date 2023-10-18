// 1. Реализовать функцию, которая принимает число и возвращает его квадрат
// (округлять дробный результат до двух симвов после запятой)
// squareNumber(3);   // 9
// squareNumber(1.1); // 1.21
// squareNumber(0);   // 0

const squareNumber = (num) => {
  const res = num ** 2;
  return Math.round(res * 100)/100;
};

console.log('Задание 1');
console.log(squareNumber(3));
console.log(squareNumber(1.1));
console.log(squareNumber(0));
console.log('');


// 2. Реализовать функцию, которая принимает два числа и возвращает информацию о том, является ли первое число квадратом второго
// isSquare(9, 3);  // true
// isSquare(0, 0);  // true
// isSquare(25, 3); // false

const isSquare = (num1, num2) => num1 === num2 ** 2;

console.log('Задание 2');
console.log(isSquare(9, 3));
console.log(isSquare(0, 0));
console.log(isSquare(25, 3));
console.log('');


// 3. Реализовать функцию, которая принимает три числа и возвращает наименьшее из них
// minimumNumber(9, 3, 2); // 2
// minimumNumber(0, 3, 1); // 0
// minimumNumber(2, 2, 3); // 2

const minimumNumber = (num1, num2, num3) => {
  if (num1 < num2) {
    return (num1 < num3) ? num1 : num3;
  } else {
    return (num2 < num3) ? num2 : num3;
  }
};

console.log('Задание 3');
console.log(minimumNumber(9, 3, 2));
console.log(minimumNumber(0, 3, 1));
console.log(minimumNumber(2, 2, 3));
console.log('');


// 4. Реализовать функцию, которая принимает два числа и возвращает наибольшее из них
// maximumNumber(9, 3); // 9
// maximumNumber(0, 3); // 3
// maximumNumber(2, 2); // 2

const maximumNumber = (num1, num2) => (num1 > num2) ? num1 : num2;

console.log('Задание 4');
console.log(maximumNumber(9, 3));
console.log(maximumNumber(0, 3));
console.log(maximumNumber(2, 2));
console.log('');


// 5. Реализовать функцию, которая принимает положительное целое число value и возвращает строку, содержащую все числа от -value до value.
// (разделить числа пробелами, убрать лишние пробелы в начале и конце строки)
// sequenceGenerator(3); // -3 -2 -1 0 1 2 3
// sequenceGenerator(1); // -1 0 1
// sequenceGenerator(0); // 0

const sequenceGenerator = (value) => {
    res = '';
    for (let i = -value; i <= value; i += 1) {
        res += ` ${i}`;
    }
    return res.trim();
};

console.log('Задание 5');
console.log(sequenceGenerator(3));
console.log(sequenceGenerator(1));
console.log(sequenceGenerator(0));
console.log('');


// 6. Реализовать функцию, которая принимает положительное целое число value и возвращает строку, содержащую чётные числа от 1 до value перечисленные через запятую.
// evenNumbers(4); // 2,4
// evenNumbers(5); // 2,4
// evenNumbers(11); // 2,4,6,8,10

const evenNumbers = (value) => {
    if (value === 1) {
        throw new Error('Чётных чисел нет');
    }

    let res = '2';
    for (let i = 4; i <= value; i += 2) {
        res += `,${i}`;
    }
    return res;
};

console.log('Задание 6');
console.log(evenNumbers(4));
console.log(evenNumbers(5));
console.log(evenNumbers(11));
console.log('');


// 7. Реализовать функцию, которая принимает положительное трёхзначное целое число value и возвращает последнюю цифру.
// lastDigit(124); // 4
// lastDigit(532); // 2
// lastDigit(123); // 3

const lastDigit = (value) => value % 10;

console.log('Задание 7');
console.log(lastDigit(124));
console.log(lastDigit(532));
console.log(lastDigit(123));
console.log('');


// 8. Реализовать функцию, которая принимает трёхзначное целое число value и возвращает вторую цифру. Если число не трёхзначное возвращает -1;
// secondDigit(124);  // 2
// secondDigit(-532); // 3
// secondDigit(11);   // -1

const secondDigit = (value) => {
    const absValue = Math.abs(value);
    if (absValue % 100 === absValue) {
        return -1;
    }
    return Math.floor((absValue % 100) / 10);
};

console.log('Задание 8');
console.log(secondDigit(124));
console.log(secondDigit(-532));
console.log(secondDigit(11));
console.log('');


// 9. Реализовать функцию, которая принимает целое число из отрезка [10, 99] и возвращает наибольшую цифру этого числа
// maximumDigit(23); // 3
// maximumDigit(21); // 2
// maximumDigit(11); // 1

const maximumDigit = (num) => {
    const num1 = Math.floor(num / 10);
    const num2 = num % 10;
    return (num1 > num2) ? num1 : num2;
};

console.log('Задание 9');
console.log(maximumDigit(23));
console.log(maximumDigit(21));
console.log(maximumDigit(11));
console.log('');


// 10. Реализовать функцию, которая принимает целое число из отрезка [100, 999] и возвращает число, без второй цифры исходного числа.
// removeDigit(208);  // 28
// removeDigit(109);  // 19
// removeDigit(940);  // 90

const removeDigit = (num) => (Math.floor(num / 100) * 10) + (num % 10);

console.log('Задание 10');
console.log(removeDigit(208));
console.log(removeDigit(109));
console.log(removeDigit(940));
console.log('');


// 11. Реализовать функцию, которая принимает два целых числа и возвращает информацию о том, кратно ли первое число - второму.
// divisibleNumber(12, 4);  // true
// divisibleNumber(11, 3);  // false
// divisibleNumber(5, 5);   // true

const divisibleNumber = (num1, num2) => num1 % num2 === 0;

console.log('Задание 11');
console.log(divisibleNumber(12, 4));
console.log(divisibleNumber(11, 3));
console.log(divisibleNumber(5, 5));
console.log('');


// 12. Реализовать функцию, которая принимает целое число обозначающее порядковый номер дня недели и возвращает информацию о том является ли он выходным или рабочим днём. Если день недели меньше 1 или больше 7 - сообщить об этом. (выходные сб и вс).
// isWeekend(1);  // 'будни'
// isWeekend(6);  // 'выходной'
// isWeekend(9);  // 'ошибка'

const isWeekend = (num) => {
    if ((num < 1) || (num > 7)) {
        return "'ошибка'";
    } else if (num < 6) {
        return "'будни'";
    } else {
        return "'выходной'";
    }
};

console.log('Задание 12');
console.log(isWeekend(1));
console.log(isWeekend(6));
console.log(isWeekend(9));
console.log('');


// 13. Реализовать функцию, которая принимает два целых числа и возвращает информацию о том, является ли одно квадратом другого.
// isSquare(2, 4);    // true
// isSquare(81, 9);   // true
// isSquare(25, 125); // false

const isSquare2 = (num1, num2) => (num1 === num2 ** 2) || (num2 === num1 ** 2);

console.log('Задание 13');
console.log(isSquare2(2, 4));
console.log(isSquare2(81, 9));
console.log(isSquare2(25, 125));
console.log('');


// 14. Реализовать функцию, которая принимает два целых числа обозначающие координаты точки и возвращает информацию о расстоянии от этой точки до начала координат. Результат округлить до двух знаков после запятой при помощи Math.round(), причём если координаты x и y, то x ≠ 0 и y ≠ 0.
// getDistance(5, 0); // 5
// getDistance(2, 2); // 2.83
// getDistance(7, 4); // 8.06


// 15. Реализовать функцию, которая принимает число и возвращает информацию о том, является ли число палиндромом. Исходное число от 0 до 2000000000.
// isPalindrome(123);   // false
// isPalindrome(12421); // true
// isPalindrome(11);    // true

// 16. Реализовать функцию, которая принимает данные и возвращает информацию о том можно с ними работать как с числом.
// isNumber(123);    // true
// isNumber('2');    // true
// isNumber('foo');  // false

// 17. Реализовать функцию, которая принимает целое положительное число value и возвращает сумму квадратов от 1 до value.
// getAmount(3);  // 14, т к 1² + 2² + 3² = 1 + 4 + 9
// getAmount(2);  // 5, т к 1² + 2² = 1 + 4
// getAmount(10); // 385, т к 1² + 2² +...+ 9² + 10² = 1 + 4 +...+ 81 + 100

// 18. Реализовать функцию, которая принимает целое положительное число и возвращает количество цифр в этом числе. Исходное число от 0 до 2000000000.
// numberLength(123);   // 3
// numberLength(3);     // 0
// numberLength(19283); // 5

// 19. Реализовать функцию, которая принимает строку и возвращает строку-перевертыш.
// flipOver('hello');    // olleh
// flipOver('swap');     // paws
// flipOver('John Doe'); // eoD nhoJ

// 20. Реализовать функцию, которая принимает строку и возвращает количество слов в строке. Слова разделяются пробелами. В исходной строке есть только буквы латинского алфавита и пробелы.
// getWordsCount('Every method declaration');     // 3
// getWordsCount('A typical program uses types'); // 5
// getWordsCount('The interface it implements');  // 4

// 21. Реализовать функцию, которая принимает строку и возвращает количество слов в ней. Символами-разделителями считаются: пробел, точка, запятая. В исходной строке есть только буквы латинского алфавита и символы-разделители
// getWordsCount('The members, methods, fields, events, and so on that it contains.'); // 11
// getWordsCount('generates, an error, as, shown, in');                              // 6
// getWordsCount('base,,, type can in turn derive, , from,,some..other,.type, in'); // 11
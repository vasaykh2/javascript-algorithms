/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const arrStr = str.split(' ');
    const arrNewStr = arrStr.map((el) => el.split('').slice(0, 1).join('').toUpperCase() + el.split('').slice(1).join(''));
    return arrNewStr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
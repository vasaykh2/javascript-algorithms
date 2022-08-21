/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
 */

function intersection(arr1, arr2) {
  const arr3 = [];
  const arr4 = [];
  arr1.forEach((el) => {
    if (arr2.includes(el)) {
      arr3.push(el);
    }
  });
  arr3.forEach((el, i) => {
    if (i === arr3.join('').indexOf(el)) {
      arr4.push(el);
    }
  });
  return arr4;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []

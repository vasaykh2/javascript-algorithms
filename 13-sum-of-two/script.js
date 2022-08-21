/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
 */

function sumOfTwo(arr, sum) {
  const res = arr.reduce((res, el, i, arr) => {
    for (j = 0; j < arr.length && j !== i; j++) {
      if (arr[j] + el === sum) {
        res++;
      }
    }
    return res;
  }, 0);
  if (res > 0) {
    return true;
  } else {
    return false;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false

console.log(sumOfTwo([2, 5, 5, 5, 5], 4)); // false

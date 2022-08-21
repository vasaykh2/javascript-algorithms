/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function primes(num) {
  const arr = [];
  const arr2 = [];
  for (j = 2; j <= num; j++) {
    arr.push(j);
  }
  arr.forEach((el) => {
    for (i = 2; i < el; i++) {
      if (el % i === 0) {
        return;
      }
    }
    arr2.push(el);
  });
  return arr2;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]

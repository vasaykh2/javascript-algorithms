/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  const arrStr1 = str1.toLowerCase().split('');
  const arrStr2 = str2.toLowerCase().split('');
  return arrStr1.reduce((res, current) => {
    return (
      str2.toLowerCase().includes(current) &&
      str1.length === str2.length &&
      str1.toLowerCase() !== str2.toLowerCase()
    );
  });
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

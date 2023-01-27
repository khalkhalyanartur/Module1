/*
Имеется массив, заполненный целочисленными числами. Написать функцию, принимающую этот массив и выводящую элементы только с четным индексом, не используя условный или тернарный оператор.

Input: [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]
Output: [14, 23, 13, 7, 3]
*/
const arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]

const  evenIndex = function (array) {
  const result = [];

  for (i = 0; i < array.length; i+=2 ) result.push(array[i]);
  return result;
  
}

console.log(evenIndex(arr));

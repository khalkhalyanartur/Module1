/*
Имеется двумерный массив. Пользуясь возможностями ES6 синтаксиса объединить его в одномерный массив.
Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

const concatArray = (array) => {
  let result = [];
  for (let i = 0; i< array.length; i++) result = result.concat(array[i]);

  return result;
}

console.log(concatArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
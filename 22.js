/*
Написать функцию, которая принимает три параметра: массив array и два числа start и end. Функция должна возвращать массив фрагмент массива array, начиная с индекса start и заканчивая end.



Input: [13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6



Output: [34, 21, 44]
*/

const returnPartArray = (array, start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(array[i]);
  }
  return result;
}

console.log(returnPartArray([13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6));
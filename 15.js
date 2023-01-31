/*
Написать функцию, принимающую на вход массив чисел, функцию фильтрации и функцию преобразования, которая фильтрует массив, преобразует данные, а затем выводит их.
Input: [1, 2, 3, 4], (el) => el %2 == 0, (el) => el * 2
Output:
4
8
*/

const numbers = [1, 2, 3, 4];

const filtrationArray = (array) => {
  const tempArray = [];
  array.forEach(element => {
    if (element % 2 == 0) tempArray.push(element);
  });

  return tempArray;
}

const tranformArray = (array) => {
  return array.map((element) => element * 2 );
}

const makeNewArray = (array, callback1, callback2) => {
  return callback2(callback1(array));
}

console.log(makeNewArray(numbers,filtrationArray,tranformArray));
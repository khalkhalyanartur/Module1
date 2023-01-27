/*
Написать функцию, принимающую число N, и возвращающую массив длиной N, заполненный числами Фибоначчи. Числа Фибоначчи - элементы числовой последовательности, в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел (пример, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233).

Input: 7

Output: [0, 1, 1, 2, 3, 5, 8]
*/
const makeFibonacci = (count) => {
  const arr = [];

  if (count === 0) {

    return arr;
  }

  if (count === 1) {
    arr[0] = 0;

    return arr;
  }  

  if (count === 2) {
    arr[0] = 0;
    arr[1] = 1;

    return arr;
  }

  arr[0] = 0;
  arr[1] = 1; //заносим если count > 2

  for (i = 2; i < count; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr;
}

console.log(makeFibonacci(4));

/*
Написать функцию, которая принимает массив целых чисел и строку, которая может иметь одно из трёх значений: ‘ASC’, ’DESC’, ‘NOT SORT’. Функция должна сортировать массив числе и возвращать его. Если строковый параметр равен ‘ASC’, то сортировать в порядке возрастания, если - ’DESC’, то в порядке убывания. В остальных случаях возвращать отсортированный массив.
Input: [4, 5, 2, 4, 1, 5, 3], ‘ASC’
Output: [1, 2, 3, 4, 4, 5, 5]
*/
const unsorted = [4, 5, 2, 4, 1, 5, 3];

const sortArray = (array, howSort) => {
  switch (howSort) {
    case "ASC":
      return [...array].sort((a,b) => a - b);
      break;
    case "DESC":
      return [...array].sort((a,b) => b - a);
      break;
    case "NOT SORT":
      return array;
      break;
    default:
      return array;
      break;
  }
}

console.log(sortArray(unsorted,"ASC"));
console.log(sortArray(unsorted,"DESC"));
console.log(sortArray(unsorted,"NOT SORT"));
console.log(sortArray(unsorted,"ky-ky"));
console.log(unsorted);


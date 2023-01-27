/*
Написать функцию, принимающую на вход строку, написанную в стиле snake_case и возвращающую эту же строку, но уже в стиле camelCase.



Input: find_and_replace_element_of_array



Output: findAndReplaceElementOfArray
*/
const string = 'find_and_replace_element_of_array';

const convertSnakeToCamal = () => {

const array = string.split('');
  let newString;
  const result = [];

  array.forEach((element, i, arr) => {
    if (element != '_' && arr[i-1] !='_' ) result.push(element)
    if (arr[i-1] === '_') result.push(element.toUpperCase());
  });

  return newString = result.join('');
}

console.log(convertSnakeToCamal(string));

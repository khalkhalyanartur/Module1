/*
Написать функцию, принимающую массив A и любое количество числе в виде аргументов и возвращающую массив A, заполненный числами, переданными в аргументе. Например, следующий вызов функции fn([1, 2, 3], 4, 5) вернёт массив [1, 2, 3, 4, 5]
*/

function addParamToArray() {
  
  const result = [];
  for (let i = 1; i < arguments.length; i++)  arguments[0].push(arguments[i]);
  return arguments[0]  
}

console.log(addParamToArray([1, 2],3,4));

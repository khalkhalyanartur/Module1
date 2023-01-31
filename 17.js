/*
В функцию подается несколько массивов. Вернуть один массив со всеми элементами.
*/

concatArray = (...arguments) => {
  const result = [];
  
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      result.push(arguments[i][j]);
    }
  }
  return result;  
}

console.log(concatArray([1, 2],[3, 4],[5, 6]));

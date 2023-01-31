/*
Имеется массив строк. Строки в массиве могут повторяться любое количество раз. Вывести уникальные строки и их количество в массиве.
Input: ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', 'aaa']
Output: 
aaa 3
bbb 2
ccc 1
*/
let arr = ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', 'aaa'];

const countUniqueStringInArray = (array) => {
  const unique =[[],[]];

  unique[0] = array.filter((item, i, ar) => {
  return ar.indexOf(item) === i
  });
  unique[0].forEach(elementUnique => {
    let countUniqe =  0;
    array.forEach (element => {
      if (element === elementUnique) countUniqe++; 
    })
    unique[1].push(countUniqe);
  });

  return unique;
}

const arrayToObj = (array) => {
  const objUnique = {};
  for (let i = 0; i < array[0].length; i++ ) {
    objUnique[array[0][i]] = array[1][i];
  }

  return objUnique;
}

console.log(arrayToObj(countUniqueStringInArray(arr)));

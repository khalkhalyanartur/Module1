/*
Заполнить двумерный массив таблицей умножения от 0 до 10 и вывести её в удобочитаемом виде.
*/
const table = [[],[],[],[],[],[],[],[],[]];

const writeMultiplicationTable = (array) => {
  
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      array[i-1][j-1] = `${i} * ${j} = ${i * j}`;
    }
  }
}


const printTable = (array) => {
  array.forEach(element => {
    element.forEach((data) => {
      console.log(data);
    })
    console.log('');
    
  });
}


writeMultiplicationTable(table);
printTable(table);

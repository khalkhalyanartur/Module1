/*
Заполнить двумерный массив таблицей квадратов целых чисел от 0 до 100 и вывести её в удобочитаемом виде.  
*/
const sqrtTableWrite = (count) => {
  const array = [[],[]] 
  for (let i = 0; i < count; i++) {
    array[0][i] = i;
    array[1][i] = i * i;
  }
  return array;
}

const arrayTablePrint = (array) => {
    for (let i = 0; i < array[1].length; i++) {
      console.log(`${i} - ${array[1][i]}`);
    }  
  
}

console.log(sqrtTableWrite(100));
let arr2 = sqrtTableWrite(100);

arrayTablePrint(arr2);

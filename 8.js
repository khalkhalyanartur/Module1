/*
Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Вывести суммарный возраст всех пользователей.

Input: [{ name: “Ivan”, age: 24 }, { name: “Oleg”, age: 16}, { name: “Igor”, age: 24}]

Output: 64
*/

const users = [
  { 
    name: "Ivan",
    age: 24
  }, { 
    name: "Oleg",
    age: 16
  }, {
    name: "Igor",
     age: 24
  }
];

const sumAge = (array) => {
  let total = 0

  array.forEach(element => {
    total = total + element.age;
  });
  
  return total;
}

console.log(sumAge(users));

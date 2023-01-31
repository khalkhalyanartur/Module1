/*
Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Рассчитать минимальный и максимальный возраст всех пользователей. Результат записать в объект вида { min: …, max: … }



Input: [{ name: “Ivan”, age: 24 }, { name: “Oleg”, age: 16}, { name: “Igor”, age: 24}]



Output: { min: 16, max: 24 }
*/
const users = [{ name: "Ivan", age: 24 }, { name: "Oleg", age: 16}, { name: "Igor", age: 24}];

const totalMinMaxAge = function (array) {
  let min = array[0].age;
  let max = array[0].age;

  array.forEach(element => {
    if (element.age < min)  {
      min = element.age
    }
    if (element.age > max)  {
      max = element.age
    }
    });
    return (
        {
          min: min,
          max: max
        }
    );  
}

console.log(totalMinMaxAge(users));
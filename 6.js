/*
Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Вывести имена тех пользователей, возраст которых больше 18 лет.

Input: [{ name: “Ivan”, age: 24 }, { name: “Oleg”, age: 16}, { name: “Igor”, age: 24}]

Output:

Ivan

Igor
*/
const users =  [
  {
    name: "Ivan",
    age: 24 
  }, {
    name: "Oleg",
    age: 16
  }, { 
    name: "Igor",
    age: 124
  }
]

const giveNameOlder = (array, age = 18) => {
  const result = [];

    array.forEach(element => {
      if (element.age > age) {
        result.push(element.name)
      }
    });

    return result;
}

console.log(giveNameOlder(users));

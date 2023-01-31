/*
Написать функцию, принимающую на вход ФИО в виде одной строки. Функция должна возвращать объект вида { first_name: “Имя”, last_name: “Фамилия”, patronymic_name: “Отчество”}
Input: “Иванов Пётр Андреевич”
Output: { first_name: “Пётр”, last_name: “Иванов”, patronymic_name: “Андреевич”}
*/

const printFullNameToObj = (fullName) => {
  fullName = fullName + '';
  return ({
    first_name: fullName.split(' ')[0],
    last_name: fullName.split(' ')[1],
    patronymic_name: fullName.split(' ')[2],
  });
}

console.log(printFullNameToObj("Иванов Пётр Андреевич"));
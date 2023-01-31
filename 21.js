/*
Написать функцию, которая принимает на вход объект вида 
{ first_name: ‘Ivan’, last_name: ‘Ivanov’, email: ‘ivanov@pochta.com’ } и возвращает строку вида: “Ivanov Ivan E-mail: ivanov@pochta.com”
*/

const convertObjToString = (object) => {
  return result = 
    object.first_name +
    ' ' +
    object.last_name +
    ' E-mail: ' +
    object.email
}

console.log(convertObjToString({ first_name: 'Ivan', last_name: 'Ivanov', email: 'ivanov@pochta.com' }));

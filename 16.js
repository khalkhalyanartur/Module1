/*
Написать функцию, принимающую на вход неотформатированный номер телефона и возвращающую его в отформатированном виде.
Input: 88005553535
Output: 8 (800) 555-35-35
*/

const formattingTelNumber = (telNumber) => {
  telNumber = telNumber + '';

  return telNumber[0] +
  ' ' +
  '(' +
  telNumber.slice(1,4) + ')' +
  ' ' +
  telNumber.slice(4,7) +
  '-' +
  telNumber.slice(7,9) +
  '-' +
  telNumber.slice(9,11); 
} 

console.log(formattingTelNumber(88005553535));

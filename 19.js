/*
Написать функцию, которая принимает на вход E-mal в виде строки и возвращает объект вида { username, domain }
Input: “ivanov.oleg@pochta.com”
Output: {
 username: “ivanov.oleg”,
 domain: “pochta.com”
}
*/

const addEmailToObj = (email) => {
  email = email + '';
  const splitEmail = email.split('@');
  
  return ({
    username: splitEmail[0],
    domain: splitEmail[1],
  });
}

console.log(addEmailToObj("ivanov.oleg@pochta.com"));


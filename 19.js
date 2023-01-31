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
  return ({
    username: email.split('@')[0],
    domain: email.split('@')[1],
  });
}

console.log(addEmailToObj("ivanov.oleg@pochta.com"));

/*
Написать функцию, принимающую массив строк и выводящих их на экран, используя цикл while. Элементы из массива извлекать с помощью оператора .pop()
 */ 

const cars = ["Volvo", "BMW", "Ford", "Mazda", "Zhiguli"];

const alertArray = (array) => {
  while (array.length > 0) {
    alert(array.pop());
  };
}

alertArray(cars);

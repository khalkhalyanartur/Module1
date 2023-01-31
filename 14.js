 /*
 Написать функцию, принимающую два числа и любую операцию над этими числами (сложение, вычитание или др.). В функции выполнить эту операцию и вернуть результат.
 */

const calculation = (a,b, operator) => {
  switch (operator) {
    case "+":
      alert(`${a} + ${b} = ${a + b}`);
      break;
    case "-":
      alert(`${a} - ${b} = ${a - b}`);
      break;
    case "/":
      alert(`${a} / ${b} = ${a / b}`);
      break;
    case "*":
      alert(`${a} * ${b} = ${a * b}`);
      break;
    default:
      alert('Неизвестное действие');
      break;
  }
}

calculation(5,5,"/");

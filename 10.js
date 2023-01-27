/*
Имеется массив с финансовыми переводами вида: [ { from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, ...]. Вычислить среднюю сумму всех переводов и рассчитать для каждого объекта отклонение от среднего и записать в поле diff. Например, при средней сумме перевода в 2000 отклонение для перевода { from: ‘Ivan’, to: ‘Oleg’, amount: 2500} будет составлять diff = 2500 - 2000 = 1000;

Input: [{ from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, { from: ‘Ivan’, to: ‘Igor’, amount: 2000}, { from: ‘Oleg’, to: ‘Igor’, amount: 1500}]

Output: 2000, [{ from: ‘Ivan’, to: ‘Oleg’, amount: 2500, diff: 500}, { from: ‘Ivan’, to: ‘Igor’, amount: 2000, diff: 0}, { from: ‘Oleg’, to: ‘Igor’, amount: 1500, diff: -500}]
*/

const cashflow = [
  { 
    from: "Ivan",
    to: "Oleg",
    amount: 2500
  }, { 
    from: "Ivan",
    to: "Igor",
    amount: 2000
  }, {
    from: "Oleg",
    to: "Igor",
    amount: 1500
  }
];

let avrCashflow = 0;

const calcAverage = (array) => {
  let sum = 0;

  array.forEach(element => {
    sum = sum + element.amount; 
  });

  return sum/array.length
}

const addDiff = (array, avr) => {
  
  return array.map((item) => (
    {
    from : item.from ,
    to : item.to,
    amount : item.amount,
    diff : item.amount - avr
    }))

}

avrCashflow = calcAverage(cashflow);
console.log(avrCashflow, addDiff(cashflow, avrCashflow));


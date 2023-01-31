const users = [{ name: "Ivan", age: 24 }, { name: "Oleg", age: 16}, { name: "Igor", age: 24}];

const totalAge = function (array) {
    let total = 0
    array.forEach(element => {
        total = total + element.age;
    });
    return total;
}

console.log(totalAge(users));
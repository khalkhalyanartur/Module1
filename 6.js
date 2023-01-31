const users =  [{ name: "Ivan", age: 24 }, { name: "Oleg", age: 16}, { name: "Igor", age: 124}]

const nameOld = function (array, age = 18) {
    array.forEach(element => {
        if (element.age > age) {
        console.log (element.name)
        }   
    });
}

nameOld(users, 100);
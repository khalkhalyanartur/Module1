const cars = ["Volvo", "BMW", "Ford", "Mazda", "Zhiguli"];

const popArray = function (array) {
    while(array.length > 0) {
        console.log(array.pop());
    };
}

popArray(cars);
console.log(cars);
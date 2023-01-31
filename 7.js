const numbers = [5,10, 15, 20, 10, 25, 20, 30, 15];

const sumBefore = function (array, n) {
    let sum = 0;

    array.forEach(element => {
        if (sum < n) {
            sum = sum + element;
        }

    });


    return sum;
}

console.log(sumBefore(numbers, 55));
const makeFibonacci = function (n) {
    const arr = [];

    if (n === 0) {
        arr = [0];
        return arr;
    }

    if (n === 1) {
        arr = [0, 1];
        return arr;
    }

    arr[0] = 0;
    arr[1] = 1;

    for (i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr;
}

console.log(makeFibonacci(7));
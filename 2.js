const arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]

const  evenIndex = function (array) {
    for (i = 0; i < array.length; i+=2 ) {
        console.log(array[i])
    }
}

evenIndex(arr)
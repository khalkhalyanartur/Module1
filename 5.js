const arr =  [{a: 5, b: 3, c: 4}, {a: 1, b: 3, c: 4}, {a: 4, b: 7, c: 4}, {a: 2, b: 2, c: 3}]

const totalGoods = function (goodsArray) {
    return arr.map((item) => (
        {
        p: item.a + item.b + item.c
        }))
}

console.log(totalGoods(arr))
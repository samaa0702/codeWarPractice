function height(n) {
    let biggerCat = 2000000;
    let h = 2000000;
    for (i = 0; i < n; i++) {
        biggerCat /= 2.5;
        h += biggerCat;
    }
    return h.toFixed(3);
}
let result = height(7);
console.log(result);
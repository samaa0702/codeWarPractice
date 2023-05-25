function alternate(n, firstValue, secondValue){
    let newArray = [];
    for (i = 0; i < n; i++) {
        if (i % 2 === 0) {
            newArray[i] = firstValue;
        } 
        else {
            newArray[i] = secondValue;
        }       
    }
    return newArray;
}
let result = alternate(0, "one", "two");
console.log(result);
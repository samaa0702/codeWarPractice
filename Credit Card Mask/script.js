function maskify(cc) {
    let array = cc.split('');
    const numToReplace = array.length - 4;
    for (i = 0; i < numToReplace; i++) {
        array[i] = '#';
    }
    return array.join('');
}

let result = maskify("4556364607935616");
console.log(result);
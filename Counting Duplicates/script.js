function duplicateCount(text){
    let array = text.toLowerCase().split('');
    let count = 0;
    let k = 0;
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++){
            if (array[i] === array[j]) {
                count += 1;
                k = 0;
                while (k !== -1) {
                    k = array.indexOf(array[j], j + 1);
                    if (k !== -1) {
                        array.splice(k, 1);
                    }
                }
            }
        }
    }
    return count;
}

let result = duplicateCount('Indivisibilities');
console.log(result);
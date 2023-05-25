function findOdd(A) {
    let result = false;
    let count = 0;
    if (A.length > 1) {
        for(i = 0; i < A.length; i++) {
            if (result === false) {
                for (j = i + 1; j < A.length; j++) {
                    if (A[i] === A[j]) {
                        A.splice(j, 1);
                        count += 1;
                        j -= 1;
                        console.log(A);
                    }
                }
                if (count % 2 === 0) {
                    result = A[i];
                }
                count = 0;
            }
        }
        return result;
    }
    else {
        return A[0];
    }

    /* Следует делать так 
    function findOdd(A) {
        let obj = {};
        Создаем пустой объект
        A.forEach(function(el){
            obj[el] ? obj[el]++ : obj[el] = 1;
            Для каждого элемента массива запускаем функцию, в которой проверяем, 
            есть ли он(Элемент массива) в объекте в виде имя:значение, 
            если нет, то приписываем имени(значению элемента массива) значение 1, а если есть, увеличиваем его на 1
            Инными словами считаем, сколько раз встречается каждый элемент массива.  
        });
        
        for(prop in obj) {
            if(obj[prop] % 2 !== 0) return Number(prop);
        }
    } */
}

let result = findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]);
console.log(result);
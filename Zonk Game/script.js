function trailingZeros(num, base){

    function primeFactors(n){
        let pi = 2;
        let ni = 0;
        let result = {};
        outer: while (n > 1) {
          while (n % Math.pow(pi, ni + 1) === 0) {
            ni++;
          }
          n /= Math.pow(pi, ni);
          if (ni > 0) result[pi] = ni;
          ni = 0;
          if (pi > 2) {
            pi += 2;
          }
          else pi++;
          if (pi * pi > base && n == base) {
            result[base] = 1;
            break outer;
          }
        }
        return result;
    }



    let obj = primeFactors(base);
    console.log(obj);
    function countOfDiv (num, n, m = 0) {
        let factNumber = n;
        while(Math.floor(factNumber / num) > 0) {
            m += Math.floor(factNumber / num);
            factNumber = Math.floor(factNumber / num);
        }
        return m;
    }

    function maxPower (obj, n) {
        let arr = [];
        for (let key in obj) {
            let m = countOfDiv(key, n);
            if ((m / obj[key]) > 0) arr.push(Math.floor(m / obj[key]));
        }
        return arr;
    }

    arrOfMax = maxPower(obj, num);
    console.log(arrOfMax);

    return arrOfMax.reduce((acc, item) =>  acc = Math.min(acc, item), num);



    /*let multipliers = function (n) {
      let multiNumber = 2;
      let arr = [];
      while (n != 1) {
        while (n % multiNumber == 0) {
            n /= multiNumber;
            arr.push(multiNumber);
        }
        multiNumber++;
      }
      return arr;
    }
    
    let arr = multipliers(base);
    let arrNum = [];
    let result = 0;
    let i = 0;
    let j = 0;
    let prevJ = -1;
    let prevRes = -1;

    for (let i = 1; i <= num; i++) {
        arrNum.push(i);
    }
    
    while (true) {
        if (arrNum[i] % arr[j] == 0) {
            arrNum[i] /= arr[j];
            j++;;
            if (j == arr.length) {
                j = 0;
                i = 0;
                result++;
            }
        }
        else i++;
        if (i == arrNum.length) {
            prevRes = result; 
            prevJ = j;
            i = 0;
        };
        if (prevJ == j && prevRes == result) break;
    }

    return result;*/
  }

console.log(trailingZeros(100, 12));
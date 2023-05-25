function mostLikely (prob1, prob2) {
    let [a, b] = prob1.split(':');
    let [c, d] = prob2.split(':');

    return a/b > c/d;


    /*let dotsIndex1 = prob1.search(':');
    let dotsIndex2 = prob2.search(':');
    let denominator1 = prob1.substring(dotsIndex1 + 1);
    let denominator2 = prob2.substring(dotsIndex2 + 1); 
    let numerator1 = prob1.substring(0, dotsIndex1);
    let numerator2 = prob2.substring(0, dotsIndex2);
    denominator1 = Number(denominator1);
    denominator2 = Number(denominator2);
    numerator1 = Number(numerator1);
    numerator2 = Number(numerator2);
    return (numerator1 / denominator1) > (numerator2 / denominator2) ? true : false;*/
}

let result = mostLikely('3:4', '1:2');
console.log(result);
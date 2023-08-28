function countBits(n) {
  let countOfBits = 0;
    while(n > 0) {
      if (n % 2 === 1) {
        countOfBits += 1;
        n -= 1;
      }
      n /= 2;
    }
    return countOfBits;
}
let result = countBits(4);
console.log(result);
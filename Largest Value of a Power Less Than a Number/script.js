function largestPower(n) {
  let x = 0;
  let b = 2;
  let numberOfOccurrences = 1;
  if (n === 1) {
    return [0, -1];
  }
  if (n <= 4) {
    return [1, -1];
  }
  else {
    for (i = n - 1; i >= 4; i--) {
      b = 2;
      if (x === 0) {
        for (b; b <= 19; b++) {
          if (x === 0) {
            x = Math.abs(Math.round(i**(1/b)) - i**(1/b)) < 0.000001 ? i : 0;
          }
          else {
            numberOfOccurrences += Math.abs(Math.round(i**(1/b)) - i**(1/b)) < 0.000001 ? 1 : 0;
          }
        }
      }
      else {
        break;
      }
    }
    return [x, numberOfOccurrences];
  }
}
let result = largestPower(81);
console.log(result);
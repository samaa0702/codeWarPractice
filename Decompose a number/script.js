function decompose(num) {
  let arrOfPower = [];
  let base = 2;
  let power = 2;
  while (num >= Math.pow(base, power)) {
    if (num >= Math.pow(base, 2)) {
      while (num >= Math.pow(base, power)) {
        power++;
      }
      num -= Math.pow(base, (power - 1));
      arrOfPower.push(power - 1);
      power = 2;
      base++;
    }
    else {
      break;
    }
  }
  return [arrOfPower, num];
}
let result = decompose(4);
console.log(result);
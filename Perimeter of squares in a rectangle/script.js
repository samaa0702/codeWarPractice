function perimeter(n) {
    let arr = [1, 1];
    let sum = 0;
    if (n === 0) {
      return 4;
    }
    if (n === 1) {
      return 8;
    }
    else {
      for (i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
      }
      arr.forEach(item => sum += item);
      return sum * 4;  
    }
}
let result = perimeter(5);
console.log(result);
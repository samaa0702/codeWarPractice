function time(num) {
  let obj = {};
  obj.year = Math.floor(num / 31536000);
  num %= 31536000;
  obj.day = Math.floor(num / 86400);
  num %= 86400;
  obj.hour = Math.floor(num / 3600);
  num %= 3600;
  obj.minute = Math.floor(num / 60);
  num %= 60;
  obj.second = num;
  let arr = [];

  for (let key in obj) {
    if (obj[key] == 1) {
      arr.push(`${obj[key]} ${key}`);
    }
    if (obj[key] > 1) {
      arr.push(`${obj[key]} ${key}s`);
    }
  }

  arr.reverse();
  let str = "";

  while (true) {
    let i = arr.length - 1;
    str += arr[i];
    arr.pop();
    if (arr.length == 0) break;
    if (arr.length == 1) str += " and ";
    else str += ", ";
  }

  return str;
}

console.log(time(3913201));

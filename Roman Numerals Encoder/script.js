function solution(number) {
    let str ="";
    str += ( "M".repeat(Math.floor(number / 1000)));
    number -= Math.floor(number / 1000) * 1000;

    if (number % 1000 >= 900) {
        str += ("CM");
        number -= 900;
    }
    if (number % 1000 >= 400 && number % 1000 < 500) {
        str += ("CD");
        number -= 400;
    }
    else {
        str += ("D".repeat(Math.floor(number / 500)));
        number -= Math.floor(number / 500) * 500;
        str += ("C".repeat(Math.floor(number / 100)));
        number -= Math.floor(number / 100) * 100;
    }

    if (number % 100 >= 90) {
        str += ("XC");
        number -= 90;
    }
    if (number % 100 >= 40 && number % 100 < 50) {
        str += ("XL");
        number -= 40;
    }
    else {
        str += ("L".repeat(Math.floor(number / 50)));
        number -= Math.floor(number / 50) * 50;
        str += ("X".repeat(Math.floor(number / 10)));
        number -= Math.floor(number / 10) * 10;
    }
    if (number % 10 >= 9) {
        str += ("IX");
        number -= 9;
    }
    if (number % 10 >= 4 && number % 10 < 5) {
        str += ("IV");
        number -= 4;
    }
    else {
        str += ("V".repeat(Math.floor(number / 5)));
        number -= Math.floor(number / 5) * 5;
        str += ("I".repeat(number));
    }
    return str;
}
let result = solution(10);
console.log(result);
function solution(str) {
  let arr = str.split(' ');
  let arrOfPunctuation = ['.', ',', '"', "'", '(', ')', ':', ';', '-', '!', '&', '%', '?'];
  let newWord = '';


  for (i = 0; i < arr.length; i++) {
    newWord = '';

    if (arrOfPunctuation.findIndex( element => element === arr[i].at(0)) === -1 ) {

      if ( arrOfPunctuation.findIndex(element => element === arr[i].at(-1)) !== -1  ) {
        for (j = 1; j < (arr[i].length - 1); j++) {
          newWord += arr[i].at(j);
        }
        newWord += arr[i].at(0) + 'ay' + arr[i].at(-1);
        arr[i] = newWord;
      }

      else {
        for (j = 1; j <= (arr[i].length - 1); j++) {
          newWord += arr[i].at(j);
        }
        newWord += arr[i].at(0) + 'ay';
        arr[i] = newWord;
      }
    }
  }
  return arr.join(' ');
}
let result = solution('Hello, world !');
console.log(result);
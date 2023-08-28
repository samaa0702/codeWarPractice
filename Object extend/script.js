function extend(...objects) {
  let resultObject = {};
  for (let obj of objects) {
    if (typeof obj === 'object') {
      for (let key in obj) {
        if (!Object.keys(resultObject).includes(key)) {
          resultObject[key] = obj[key];
        }
      }
    }
  }
  return resultObject;
}
let result = extend( {a: 1, b: 2}, {c: 3} );
console.log(result); 
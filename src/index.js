
// You should implement your task here.

const { sort } = require("semver");

module.exports = function towelSort (matrix) {
  let output = [];
  let result = [];
  let valueReverse; 
  if (!matrix){
    return [];
  }
  for (const [key, value] of Object.entries(matrix)) {
    if ( key % 2 == 0) {
    for (const [subkey, subvalue] of Object.entries(value)) {
        result.push(subvalue);
    }
  }
    else 
    { 
      valueReverse = value.reverse();
      for (const [subkey, subvalue] of Object.entries(valueReverse)) {
        result.push(subvalue);
    }
    }
  }
  return result;
}

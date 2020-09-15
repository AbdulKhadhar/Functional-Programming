var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true


function checkPositive(arr) {
  return arr.some(function(currentValue){
    return currentValue>0
  })
}
checkPositive([1, 2, 3, -4, 5]);

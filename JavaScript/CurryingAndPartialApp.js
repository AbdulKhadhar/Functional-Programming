//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3


// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13


function add(x) {
  return add=x=>y=>z=>x+y+z;
}
add(10)(20)(30);

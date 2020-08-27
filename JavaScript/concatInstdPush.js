var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way


function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

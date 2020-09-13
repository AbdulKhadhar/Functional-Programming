var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"


function sentensify(str) {
  var strsplit=str.split(/\W/);
  return strsplit.join(" ");
}
sentensify("May-the-force-be-with-you");

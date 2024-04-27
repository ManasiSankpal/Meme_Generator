
let arr = [1, 2, 3];

function modifyArray(array) {
  array.push(4);
}
modifyArray(arr.splice(1,1));
console.log(arr);
  
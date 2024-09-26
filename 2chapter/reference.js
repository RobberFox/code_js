var a = 2;
var b = 2;
b++;
console.log(a); // 2
console.log(b); // 3

var c = [1,2,3];
var d = c; // `d` is a reference to the shared `[1,2,3]` value
d.push(4);
console.log(c); // [1,2,3,4]
console.log(d); // [1,2,3,4]

// JS doesn't have pointers

var c = [1,2,3];
var d = a;

d = [4,5,6]
console.log(c); // [1,2,3]
console.log(d); // [4,5,6]

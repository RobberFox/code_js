var a = "FOO";
var b = ["F", "O", "O"];

a[1] = "L";
b[1] = "W";

console.log(a);
console.log(b);


var c = Array.prototype.join.call(a, "-");
var d = Array.prototype.map.call(a, function(v) {
	return v.toUpperCase() + ".";
}).join("");

var n = 1234

console.log(c);
console.log(d);

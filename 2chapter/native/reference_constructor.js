function foo(x) {
	x = x + 1;
	x; //3
}

var a = 2;
var b = new Number(a); // or equivalently `Object(a)`

foo(b);
console.log(b); //2, not 3


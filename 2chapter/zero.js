var a = 0/-3;
var b = 0*-3 

console.log(a)
console.log(b)

/* NOTE: */ console.log("CONVERSION");
console.log((-0).toString());
console.log(-0 + "");
console.log(String(-0));

console.log(+"-0");
console.log(Number("-0"));
console.log(JSON.parse("-0"));

/* NOTE: */ console.log("COMPARISON");
var c = 0;
var d = -0;

console.log(c == d);
console.log(0 == -0);
console.log(c === d);
console.log(0 === -0);
console.log(0 > -0);
console.log(c > d);

var a = 42;

var b = a + "";

console.log(typeof(b), b);

console.log(-42.9 | 0);

console.log(Number("42px"));
console.log(parseInt("42px"));
console.log(parseInt(1/0, 19)); // never use `parseInt` with non-strings

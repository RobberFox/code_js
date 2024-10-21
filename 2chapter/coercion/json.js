console.log(JSON.stringify(42)); // "42"
console.log(JSON.stringify("42")); // ""42""

console.log(JSON.stringify([1, undefined, function(){}, 4])); // "[1,null,null,4]"

var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
};

console.log(JSON.stringify(a, ["b","c"])); // "{"b":42,"c":"42"}"


function foo() {
	var arr = Array.prototype.slice.call(arguments);
	return arr;
}

function foo_ES6() {
	var arr = Array.from(arguments);
	return arr;
}

console.log(foo("booba", 11));
console.log(foo_ES6("gribblesnap", [1]));

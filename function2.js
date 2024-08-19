var foo = function() {
	// something
}

var ligma = function bar() {
	// something
}

var booba = (function IIFE(){
	console.log("Hello!");
	return 42;
})();
console.log(booba);

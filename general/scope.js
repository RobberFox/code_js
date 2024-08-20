function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		console.log(a+b); // both a, b are accesible
	}
	inner();

	console.log(a); // only a is accessible
}

outer();

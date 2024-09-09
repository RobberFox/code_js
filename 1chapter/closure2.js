var fn;

function foo() {
	var a = 2;

	function baz() {
		console.log(a); // 2
	}

	fn = baz;
}

function bar() {
	fn(); // baz has closure over the lexical scope of foo
}

foo();
bar(); // 2

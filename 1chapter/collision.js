function foo() {
	function bar(a) {
		i = 3; // collides with loop's `i`
		console.log(a+i);
	}

	for (var i=0; i<10; i++) {
		bar(i*2); // infinite loop
	}
}

foo();

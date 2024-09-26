function foo(x) {
	x.push(4);

	x = [4,5,6]; // Here it's now a new array, no reference to the previous one
	x.push(7);
}

var a = [1,2,3];
foo(a)
console.log(a); // [1,2,3,4], not [4,5,6,7]

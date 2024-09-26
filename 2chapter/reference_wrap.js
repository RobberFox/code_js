function foo(wrapper) {
	wrapper.a = 42;
}

var obj = { a: 2 };

foo(obj);

console.log(obj.a);

function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(3)); // 4 <- 1 + 3
console.log(plusOne(41)); // 42 <- 1 + 41
console.log(plusTen(13)); // 23 <- 10 + 13



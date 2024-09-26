function isNegZero(n) {
	n = Number(n);
	return (n === 0) && ( 1/n === -Infinity);
}

console.log(isNegZero(-0));
console.log(isNegZero(0/-3));
console.log(isNegZero(0));


var a = 2 / "ligma";
var b = -3*0
console.log(Object.is(a, NaN));
console.log(Object.is(b, -0));
console.log(Object.is(b, 0));

// Polyfill
if (!Object.is) {
	Object.is = function(v1, v2) {
		if (v1 === 0 && v2 === 0)
			return 1/v1 === 1/v2; // test for `-0`

		if (v1 !== v1)
			return v2 !== v2; // test for `NaN`
		
		return v1 === v2; // everything else
	};
}

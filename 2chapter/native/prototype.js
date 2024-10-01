function isThisCool(vals, fn, rx) {
	vals = vals || Array.prototype;
	fn = fn || Array.prototype;
	rx = rx || Array.prototype;

	return rx.test(vals.map(fn).join(""));
}

isThisCool(); // true



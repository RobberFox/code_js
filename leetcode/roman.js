var roman = 'III'
function romanToInt(s) {
	var table = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}
	var except = {
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	}
	var array;
	for (let i = 0; i<s.length; ++i) {
		if (s[i]+s[i+1] !==  )
			;

	}

}

console.log(romanToInt(roman));

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_RATE); // taxation is everywhere
	
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);
console.log(amount.toFixed(2));

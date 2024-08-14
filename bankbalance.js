const CHOCOLATE_PRICE = 9.99;

const prompt = require("prompt-sync")({ sigint: true });

var bank_balance = prompt("Your card balance: ");
var croissant_cost = 99.99;

croissant_cost = croissant_cost * 2 // Croissant cost inflated by 100% in 2024

if (croissant_cost + CHOCOLATE_PRICE < bank_balance) {
	console.log("I'll take the croissant with chocolate!");
	croissant_cost = croissant_cost + CHOCOLATE_PRICE;
}
else {
	console.log("No, thanks, I'm broke.")
}



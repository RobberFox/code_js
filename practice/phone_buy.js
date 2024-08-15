const prompt = require("prompt-sync")({ sigint: true });
const ACCESSORY_COST = 9.99;
const PHONE_COST = 49.99;

function print_formatted(str,num) {
	console.log(str, num.toFixed(2)+"$");
}

var bank_balance = prompt("Your card balance: ");
var balance_before = bank_balance;

while (bank_balance > PHONE_COST) {
	bank_balance -= PHONE_COST;
}

while (bank_balance > ACCESSORY_COST) {
	bank_balance -= ACCESSORY_COST; 
}

console.log("\n... VIGOROUS MONEY SPENDING ...\n");

print_formatted("Bank balance:", bank_balance);
print_formatted("Spendings:", balance_before-bank_balance);

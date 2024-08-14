var numOfCustomers = 3;

while (numOfCustomers > 0) {
	console.log("How may I help you?");
	// doing some help ...
	numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
	console.log("How may I help you?");
	// doing some help ...
	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

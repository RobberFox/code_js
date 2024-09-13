function my_print() {
	console.log("a")
}

function my_setInterval(code, time, callback) {
	callback(code, time);
}

my_setInterval(my_print, 1000, setTimeout);

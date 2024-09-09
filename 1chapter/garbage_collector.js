function process(data) {
	// do something
}

{
	var someReallyBigData = { .. };

	process(someReallyBigData);
}

var btn = document.getElementById("my+buttom");

btn.addEventListener("click", function click(evt) {
	console.log("buttom clicked");
}, /*capturingPhase=*/false);

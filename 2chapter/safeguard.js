(function() {
	function FeatureXYZ() { /* some code */ }

	// include `doSomethingCool(..)`
	function doSomethingCool() {
		var helper =
			(typeof FeatureXYZ !== "underfined") ? FeatureXYZ : // ternary
			function() { /* some other code */ }

		var val = helper();
		// ..
	}

	doSomethingCool();
})();

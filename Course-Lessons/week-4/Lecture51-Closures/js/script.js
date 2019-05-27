// Closures

function makeMultiplier (multiplier) {
	// var multiplier =2;

	function b() {
		console.log("Multiplier is: " + multiplier);
	}
	b();

	return (
		// multiplier is still in the execution environment, in this section we only create the function.
		function (x) {
			return multiplier * x;
		}
	);
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
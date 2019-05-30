// Closures

function makeMultiplier (multiplier) {
	// var multiplier =2;

	function b() {
		console.log("Multiplier is: " + multiplier);
	}
	b();

	return (
		// multiplier is still in the execution environment, in this section we only create the function.
		// the outer environment remains after execution multiplier = 2
		function (x) {
			return multiplier * x;
		}
	);
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));


// in this case the inner function is stored in a object literal
function makeMultiplayer2 (multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

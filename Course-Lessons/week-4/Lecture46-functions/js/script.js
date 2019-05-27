function multiply(x,y) {
	return x * y;
}

console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.version);

// Function factory 
function makeMultiplayer (multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplayer(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplayer(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}
var result = doOperationOn(5,multiplyBy3);
console.log(result);

result = doOperationOn(300,doubleAll);
console.log(result);

var message = "in global";
console.log("global: message = " + message);

function a () {
	var message = "inside a";
	console.log("a: message = " + message);
	b(message);
}

function b (str) {
	console.log("b: message = " + str);
}

a();

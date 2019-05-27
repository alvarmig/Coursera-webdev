/*function test() {
	console.log(this);
	this.myName = "Miguel";
}

test();
console.log(window.myName);*/

// Function constructores

function Circle (radius) {
	this.radius = radius;
	// console.log(this);

	//Use prototype tu reduce redundancy each time you create a new circle
	/*this.getArea = 
		function() {
			return Math.PI * Math.pow(this.radius,2);
		};*/
}
Circle.prototype.getArea = 
	function () {
		return Math.PI * Math.pow(this.radius,2);
	}

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

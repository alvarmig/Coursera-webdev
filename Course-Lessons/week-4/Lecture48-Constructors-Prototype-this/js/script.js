// Function constructors

function Circle (radius) {
	this.radius = radius;
}

// prototypes
Circle.prototype.getArea = 
	function () {
		return Math.PI * Math.pow(this.radius,2);
	}

var myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.getArea());

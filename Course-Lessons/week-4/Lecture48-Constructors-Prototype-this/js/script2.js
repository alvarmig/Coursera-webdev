function test() {
	console.log(this);
	this.myName = "Miguel";
}

test();
console.log(window.myName);

// Function constructors
function Circle2 (radius) {
    this.radius = radius;

    //Use prototype tu reduce redundancy each time you create a new circle 
    // see script1
    this.getArea = 
        function () {
            return Math.PI * Math.pow(this.radius,2);
        };
}

var myCircle =  new Circle2(10);
console.log(myCircle);
console.log(myCircle.getArea());
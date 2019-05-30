/*var johnGreeter = {};

johnGreeter.name = "John"; 

johnGreeter.sayHi = function () {
    console.log("Hi " + johnGreeter.name);
}

var greeting = "Hi";
johnGreeter.sayHi2 = function () {
    console.log(greeting + johnGreeter.name);
}*/

(function (window) {

    var johnGreeter = {};
    johnGreeter.name = "John"; 
    var greeting = "Hi ";

    johnGreeter.sayHi2 = function () {
        console.log(greeting + johnGreeter.name);
    }
    window.johnGreeter = johnGreeter;
})(window);


// See the two consecutive functions below for the complete example
(function (window) {
    var literalCircle ={};
    literalCircle.radius = 10;

    literalCircle.getArea = function () {
        var self = this;
		var increaseRadius = function() {
			self.radius = 20;
        };
        
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(literalCircle.radius,2);
    }
    window.literalCircle = literalCircle;
})(window);

var literalCircle2 = { // new Object();
	radius: 10, 

	getArea: function () {
		var self = this;
		console.log(this);

		var increaseRadius = function() {
			self.radius = 20;
		};

		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius,2);
	}
};

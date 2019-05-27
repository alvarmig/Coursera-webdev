/*var yaakovGreeter = {};
yaakovGreeter.name = "Yaakov";

function sayHello() {
    console.log("Hello " + yaakovGreeter.name);
}

yaakovGreeter.sayHello2 = function () {
    console.log("Hello " + yaakovGreeter.name);
}

var greeting = "Hello ";

yaakovGreeter.sayHello3 = function () {
    console.log(greeting + yaakovGreeter.name);
}*/

(function(window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";

    yaakovGreeter.sayHello3 = function () {
        console.log(greeting + yaakovGreeter.name);
    }

    window.yaakovGreeter = yaakovGreeter;
})(window);
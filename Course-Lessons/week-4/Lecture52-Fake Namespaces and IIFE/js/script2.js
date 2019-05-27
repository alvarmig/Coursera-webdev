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
// Arrays

var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function(name) {
	console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
console.log(array[1]);

// Invoke a function from an array
array[2]("Miguel");
array[2](array[0]);
console.log(array[3].course);

var arr = ["Miguel", "Juan", "Pedro"];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
	console.log("Hello " + arr[i]);
}

var arr = ["Miguel", {name: "John"}, {name: "Peter"}];
console.log(arr);

var names = [];
names[5] = "Jim";

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}


// Object liteal can be traversed as an array 
var myObj = {
	name: "Miguel",
	course: "HTML, CSS & Java", 
	platform: "Coursera"
};

for (var prop in myObj) {
	console.log(prop + " : " + myObj[prop]);
}

var names2 = ["Miguel", "Juan", "Pedro"];

names2.greeting = "Hi!" // this is not a property of an Object its the value of the array

for(var name in names2) {
	console.log("Hello " + names2[name]);
}


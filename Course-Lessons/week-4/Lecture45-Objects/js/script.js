var company = new Object();

company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.color = "blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
console.log(company["ceo"]);
console.log(company.ceo["color"]);

company["stock of company"] = 110;
console.log("Stock price is " + company["stock of company"]);

var stockPropName = "stock of company";
company[stockPropName] = 1120;
console.log("Stock price is " + company[stockPropName]);

// Better way: object literal
var Facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		color: "blue"
	},
	"stock of company": 250,
	$stock: 110
};

console.log(Facebook);
console.log(Facebook.ceo.firstName + " " + Facebook["stock of company"]);

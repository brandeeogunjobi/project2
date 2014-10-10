//alert("JavaScript works!");

//Brandee Ogunjobi
//SDI Term 1410
//Project 2


//Start 
	var name = alert("Are you ready for the story?");

//Procedure - Return Value
var getGreetingByName = function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay, greeting;
	if (currentHour < 12) { timeOfDay = "morning"; }
	else if (currentHour < 17) { timeOfDay = "afternoon"; }
	else { timeOfDay = "evening"; }
		greeting = "Good " + timeOfDay + "," + name + "!";
		//console.log();
	return greeting;
};

var fullGreeting = getGreetingByName("Mr. Lewis");

console.log(fullGreeting);

//Variables

var children = 7;
var adults = 5;
var totalPeople;
var guestsArrive = true;
var confrimationToEat = true;

// Procedure
var addition = function() {

	totalPeople = children + adults;
	
	console.log("The total number is " + totalPeople + " to dinner. ");
}

addition();

children = 7;
adults = 5;

addition();

//Prompt Argument
myPrompt = prompt("Enter Number Of Guests");
	if (myPrompt <= 1) {
	console.log("Great, we have enough food!");
} 	else {
	console.log("Please bring a dish.");
};

//Argument Conditional
if (guestsArrive === true) {
	console.log("Hello and Welcome.");
} 	else {
	console.log(" Let's continue to prepare.");
};


//Boolean Function //Local Variables
if ((!vegan && !meatEater) || notPickyEater) {
	var vegan = false, meatEater = false, notPickyEater = true;
	console.log("The expression is true");
} 	else {
	console.log("The expression is false");
}

confirmationToEat = confirm("It is time to eat!");
	if(confirmationToEat === true) {
	console.log("It's " + confirmationToEat + "." + " We have lots of food for everyone.");
} 	else {
	console.log("It's " + confirmationToEat + "." + " We don't have enough food." );
}

//While Loop 
var plates = 0;
	console.log("Starting Loop" + "<br />");
while (plates < 12){
  	console.log("Current Count : " + "Get More Plates!" + plates + "<br />");
  	plates++;
}
	console.log("Dinner is served!");
	console.log("Hope your enjoying the yummy dinner!");


//Comparison //Outputs
var numberOfPlates = prompt("Enter Number Of Plates");

if(numberOfPlates===12)
{
    console.log("Everyone has a plate!")
}
else if(numberOfPlates<12)
{
    console.log("Let's start to eat!")
}
else if(numberOfPlates>12)
{
    console.log("Too many plates!")
}

//String Function
var dessert = "Ice Cream"
	alert:console.log("Don't worry, we will go for " + dessert + " after dinner.");
var whatTime = "Five O'Clock"
if (whatTime == "Five O'clock")
{
	console.log("whatTime is Five O'Clock");
}
 
function myFunction() 
{
	var choco = "Chocolate Ice Cream";
	var vanilla = "Vanilla Ice Cream";
	if (choco != vanilla) {
			var straw = "Strawberry";
		} else {
			var mint = "Mint Chocolate Chip";
			console.log(mint); }
}
var mint = "My favorite ice cream is Mint Chocolate Chip";
console.log(mint);

//Number Function
var Scoops = " people will have ice cream"
var ice = myFunction(2*6);
	console.log("It looks like " + ice  + Scoops + ".");
function myFunction(x, t) {
	return 2 * 6;
}

var name = "Children";

if (name) {
	var name = "Children"
	console.log (name + " did you like your ice cream?");
}

//For Loop
for (var iceCream = 0, limit = 10; iceCream < limit; iceCream++) {
    
    console.log('Some children had ' + iceCream + " scoops.");
    
}

// Return Number - Return Number - Math - Output

var iceCreamMoney = function(useCash) {
	var pricePerScoop = 3,
		scoops;
	if (useCash < pricePerScoop) {
		console.log("You can't buy anything!");
		scoops = 0;
	}
	scoops = Math.floor(useCash / pricePerScoop);
	return scoops;
};

var gotScoops = iceCreamMoney(30);
console.log("One child ate " + gotScoops + " scoops of Ice Cream!");

//Finish
console.log("Thank you for joining us and good night.");





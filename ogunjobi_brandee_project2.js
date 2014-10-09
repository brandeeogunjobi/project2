//alert("JavaScript works!");

//Brandee Ogunjobi
//SDI Term 1410
//bProject 2

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
	console.log("Hello. Please come in.");
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
	console.log(" It's " + confirmationToEat + "." + " We have lots of food for everyone.");
} 	else {
	console.log(" It's " + confirmationToEat + "." + " We don't have enough food." );
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







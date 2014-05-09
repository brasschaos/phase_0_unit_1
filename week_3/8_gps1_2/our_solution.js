// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Jared Chevalier
//  2. Dominic Scotto


1. "YOU SIGNED... WHO?!"

//  mine at first:
    var actorsArray = [adamSandler, kristenBell, jimCarrey]
// followed by individual variables being created i.e. 2. Here They Come!

//  better way, so as to tie in with functions:
    
    var Client = function (firstName, lastName, age, quote) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.quote = quote;
                          }
2. "Here they Come!"
//My way at first:

var adamSandler = {
            name: "Adam Sandler",
            age: 47,
            quote: "The price is wrong, Bob!"
            };
             
var kristenBell = {
        name: "Kristen Bell",
        age: 33,
        quote: "Do you wanna build a snowmaaaaaan?"
        };
        
var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "Halftime!!"
};
        
//Better way i learned:

var client1 = new Client("Adam","Sandler",47,"That's your home! Are you too good for your home?!")
var client2 = new Client("Kirsten", "Bell",33,"Do you wanna build a snowman?");
var client3 = new Client("Jim", "Carrey", 52, "...Do you're telling me there's a chance? YEAH!");


3. "TIME IS MONEY!"

//YOUR CODE HERE!




var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

//My way at first:


for (var i=0; i < actorsArray.length; i++)
{
	console.log(actorsArray[i]);
}

//Better Way:
var AddressBook = function(){
    var contacts = [];
    this.addContact = function(client){
        contacts.push(client);
    }
    this.printContacts = function(){
      for (clientPosition in contacts){
        console.log("Name: " + contacts[clientPosition].name);
        console.log("Age: " + contacts[clientPosition].age);
        console.log("Quote: " + contacts[clientPosition].quote);
      }
    }
}



// ** BONUS **

var ourAddressBook = new AddressBook();

ourAddressBook.addContact(client1);
ourAddressBook.addContact(client2);
ourAddressBook.addContact(client3);
ourAddressBook.printContacts();


//  Your Reflection:

  "Since I had the instructor to myself, I took the opporotuniy to learn more about syntax differences between ruby and JS."
  "Organization was not my obstacle, just the syntax and thus the power/versatility that comes with knowing it well."
  "I feel at this point that much more time will be necessary to gain said affinity, but I know that I am not the only one."
  "So in conclusion, the greatest gain as far as my individual preparedness for phase_1 looks like memorizing"
  "a _lot_ of syntax, through which i will better understand how to potentially organize my code in the first place."
  
Heres the complete stypi:
/*
  Name: Adam Sandler
Age: 47
Quote: "That's your home! Are you too good for your home?!"

Name: Kristen Bell
Age: 33
Quote: "Do you wanna build a snowman?"

Name: Jim Carrey
Age: 52
Quote: "...So you're telling me there's a chance? YEAH!"

*/

var adamSandler = {
             name: "Adam Sandler",
             age: 47,
             quote: "The price is wrong, Bob!"
             };
             
var kristenBell = {
        name: "Kristen Bell",
        age: 33,
        quote: "Do you wanna build a snowmaaaaaan?"
        };
        
var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "Halftime!!"
};
        
var actorsArray = [adamSandler, kristenBell, jimCarrey]

//console.log (actorsArray) 
for (var i=0; i < actorsArray.length; i++)
{
console.log(actorsArray[i])
}

actorsArray.forEach(function(actors){
  console.log(actors);
});

//Extra stuff
var adamSandler = {
	name: "Adam Sandler",
	age: 47,
	quote: "The price is wrong, Bob!",
	funTimes : function(){
		console.log("WHAT A FUN TIME");
	}
};
             
var kristenBell = {
	name: "Kristen Bell",
	age: 33,
	quote: "Do you wanna build a snowmaaaaaan?"
};
        
var jimCarrey = {
	name: "Jim Carrey",
	age: 52,
	quote: "Halftime!!"
};
        
var actorsArray = [adamSandler, kristenBell, jimCarrey];

//console.log (actorsArray) 
for (var i=0; i < actorsArray.length; i++)
{
	console.log(actorsArray[i]);
}

adamSandler.funTimes()

//Constructor Functions

var Client = function (firstName, lastName, age, quote) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.quote = quote;
}

/*
var client1={"Adam","Sandler",47,"That's your home! Are you too good for your home?!"}
var client2= {"Kirsten", "Bell",33,"Do you wanna build a snowman?"}
var client3= {"Jim", "Carrey", 52, "...Do you're telling me there's a chance? YEAH!"}
*/

var client1 = new Client("Adam","Sandler",47,"That's your home! Are you too good for your home?!")
var client2 = new Client("Kirsten", "Bell",33,"Do you wanna build a snowman?");
var client3 = new Client("Jim", "Carrey", 52, "...Do you're telling me there's a chance? YEAH!");
 
console.log(client1)

var AddressBook = function(){
    var contacts = [];
    this.addContact = function(client){
        contacts.push(client);
    }
    this.printContacts = function(){
      for (clientPosition in contacts){
        console.log("Name: " + contacts[clientPosition].name);
        console.log("Age: " + contacts[clientPosition].age);
        console.log("Quote: " + contacts[clientPosition].quote);
      }
    }
}

var ourAddressBook = new AddressBook();

ourAddressBook.addContact(client1);
ourAddressBook.addContact(client2);
ourAddressBook.addContact(client3);
ourAddressBook.printContacts();

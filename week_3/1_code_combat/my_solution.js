// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

"Rescue Mission:"
// pretty straightforward
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy(); //KILL


"Grab The Mushroom:"

this.moveUp();
this.moveRight(); //POWER UP
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

"Drink Me:"

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();     //HEALZ
this.moveUp();
this.moveRight();
this.attackNearbyEnemy(); 

"Taunt the Guards:"
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey noob");   //lols
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.say("lol");    //unnecessary but lols
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("OI!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


"It's a Trap!"
// lol ^^^^
this.moveDown();
this.moveDown();
this.say("hey noob");
this.moveUp();
this.say("I'll pwn u");
this.moveUp();
this.say("HAHA");
this.moveDown();
this.say("OW");    //had to mess around

 
"Break the Prison:"
//simple right?
if (name === "William" || name === "Lucas" || name === "Marcus" || name === "Robert" || name ==="Gordon")
     return true;
 
"Taunt:"
//lols
this.say("ROGURE LOLOLOLOL@!!111eleven");
this.say("ILL PWN U NUB");
this.say("OMG LOL");
this.say("HAHA");


"Cowardly Taunt:"
//more lols, plus i cut it short like a boss
 this.moveXY(50, 16);
this.say("ya'll ogres need jesus");
this.moveXY(63, 20);
this.say("oh noes might die");


"Commanding Followers"

this.moveXY(49, 66);
this.moveXY(60, 65);
this.moveXY(75, 63);
this.say("Hail, friends! What is your profession?");   //heh sorry
this.say("Follow me, hos!");
this.moveXY(67, 29);
this.say("Attack, my hos! i have a text message");     //cause he stands there and they still win

"Mobile Artillary"

this.moveXY(30, 26);
this.attackXY(46, 5);   //first group down
this.moveXY(33, 37);
this.attackXY(47, 63);
this.attackXY(45,53);      //second group down
this.moveXY(47,37);        //reposition, sigh
this.attackXY(67,54);
this.attackXY(59,42);      //owned

"MY pvp code with librarian"
 // The Librarian is a spellcaster with a fireball attack
// plus three useful spells: 'slow', 'regen', and 'haste'.
// Slow makes a target move and attack at half speed for 5s.
// Regen makes a target heal 10 hp/s for 10s.
// Haste speeds up a target by 4x for 5s, once per match.
// I'll end up with having slow only hit enemy fighters or heroes, commanding all friendlies
// to focus fire on the target with the lowest max health, and an auto haste on
// the other hero(if there is one) once the enemy base takes its first damage.
 
// Currently regen only casts if targets are below max hp to avoid overheals.
// Nothing aside from necessary commands to win against simple ai otherwise.

var friends = this.getFriends();
var enemies = this.getEnemies();
if (enemies.length === 0) return;  // Chill if all enemies are dead.
var enemy = this.getNearest(enemies);
var friend = this.getNearest(friends);

// Which one do you do at any given time? Only the last called action happens.
if(this.canCast('slow', enemy)) this.castSlow(enemy);
if(this.canCast('regen', friend) && friend.health < friend.maxHealth)
   this.castRegen(friend);
//if(this.canCast('haste', friend)) this.castHaste(friend);
else this.attack(enemy);
end;
// You can also command your troops with this.say():
//this.say("Defend!", {targetPos: {x: 30, y: 30}}));
this.say("Attack!", {target: enemy});
//this.say("Move!", {targetPos: {x: 50, y: 40});


// Reflection:
// "Awesome! Very cleverly made. Voices a bit much, but good music. it was totally fun and i totally enjoyed messing with it."
// "I'm getting emails giving me a list of how my code fares against other people. occasional win and tie so not bad"



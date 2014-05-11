// I worked [by myself, with:] on this challenge

// Your mission description:
// Use the librarian/wizard hero's skills to support the little units in their own
// fights against other litle units.
//
// First, a fighter squares off against 2 rogre equivilents, requires healing to survive.
// Once complete, a nearby archer engages one big, approaching rogre. need to
// use slow on the rogre and help kill it before it kills the archer or hushbaum. PS hushbaum does low damage in this one
// Style points for healing the archer or himself if necessary.
//  The end, celebration ensues
//
// Hushbaum(librarian) starts bottom right, fighter nearby calling for help asking for healz as usual for fighters.
// The archer is atop a hill, yells INCOMING or something and then something like SLOW HIM DOWN@!

// Initial Code      oh man..
Hushbaum's Plan():
this.moveXY(15, 15);
this.say("Beautiful day!")
//  if(canCast)'regen' {
//  this.regen.nearbyAlly();
//  }
//  else this.attackNearbyEnemy()

//  if(canCast)'slow' {
//  this.slow.nearbyEnemy(); 
//  }
//  else this.attackNearbyEnemy()
this.attackNearbyEnemy()



// Refactored/sucessful PCode

// commented lines taken out by instruction to use spells.
// the movements will need to be added to position him properly for supporting the respective allies.
// extra bonus points of you call over or bring the fighters to the archer scenario.


// Reflection
// 
//  The differences between what I wrote and what works are hopefully not many beyond semantics.
//  I'm hoping by refactored code you mean solution to the mission objectives. If not, I definitely
//  need more time for this one. The refactoring would then have to be the actual, working version
//  of what I flailed at for the intial code, I assume.  oi
// 
// 
// 
// 
// 
// 
// 

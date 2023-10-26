// You will be working with this class
class Cat {

// give the class at least 3 properties
constructor (kittyname, color, breed) {
this.kittyname = kittyname;
this.color = color;
this.breed = breed;
}


// give the class at least 3 methods
   
   meow() {
    console.log(`${this.kittyname} says meow!`);
  }
    Shade() {
    console.log(`${this.kittyname} is grey!`);
  }
    Family() {
    console.log(`${this.kittyname} is a Siamese cat.`);
  }
}

// create two instances of the class (two cats)
const Birungi = new Cat ("Birungi Whiteford", 8)
const Nala = new Cat ("Nala", 7)

// log both instances to see their properties
console.log (Birungi)
console.log(Nala)

// invoke each method from both instances
Birungi.meow ();
Birungi.Shade ()
Birungi.Family();

Nala.meow ();
Nala.Shade();
Nala.Family();

// PIRATES 
// Constructors
// create 3 properties that are set by the constructor
class Pirate {
 constructor (pirateship, piratename, speech) {
  this.pirateship = pirateship;
  this.piratename = piratename;
  this.speech = speech;
  }
  // create 3 methods
  fortuneShip() {
    console.log(`${this.pirateship}'s name is FortuneShip!`);
  }
    emerald() {
    console.log(`${this.emerald} is green!`);
  }
    Mate() {
    console.log(`${this.speech} Oi matey}!`);
  }
}

// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and 
// blackPearl
const jollyRoger = [
  { name: "Eyepatch", role: "Captain" },
  { name: "Spear", role: "Co-Captain" },
  { name: "Guy", role: "Crew" }
];

// Create an array for the Black Pearl crew
const blackPearl = [
  { name: "Fog", role: "Captain" },
  { name: "Storm", role: "Co-Captain" },
  { name: "Shark", role: "Crew" }
];

// loop over each array and print 3 properties of each pirate
console.log("Jolly Roger Crew:");
for (let i = 0; i < jollyRoger.length; i++) {
    const pirate = jollyRoger[i];
    console.log("Name: " + pirate.name);
    console.log("Role: " + pirate.role);
    }

  // Loop over the Black Pearl crew and print 3 properties
console.log("Black Pearl Crew:");
for (let i = 0; i < blackPearl.length; i++) {
    const pirate = blackPearl[i];
    console.log("Name: " + pirate.name);
    console.log("Role: " + pirate.role);
}
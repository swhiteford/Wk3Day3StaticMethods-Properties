// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)
// Static method to display a greeting message for a governor

class Governor {
static name = "Susan"
static party = "Green"
static state = "New Jersey"
static Greeting () {
  return `Greetings, Governor ${Governor.name} of ${Governor.state}!`;
}
}
console.log(Governor.name, Governor.state)
console.log(Governor.Greeting())

// Inheritance
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
  constructor(firstName, lastName, faveColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.faveColor = "brown";
  
  }

  greet() {
    
  return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  geteyeColor() {
    console.log('I have brown eyes');
  }
}

class PostalWorker extends Person {
  constructor(firstName, lastName, faveColor){
  super(firstName, lastName, faveColor)
}
truck(){
return 'I drive a Ford truck';
}
}

class Chef extends Person {
  constructor(firstName, lastName, faveColor){
  super (firstName, lastName, faveColor)

}
favoritedish (){
  return "I make good pizza"
}
}

// Create 2 PostalWorkers and 2 Chefs
  const Frankie = new PostalWorker ("Frankie", "Bean")
  const Jeannie = new PostalWorker ("Jeannie", "Smith")
  const Chef1 = new Chef ("Chef Ramsey")
  const Chef2 = new Chef ("Chef Patel")

// Log them and test all their methods
   console.log (Frankie.truck())
  console.log (Jeannie.truck());
  console.log (Chef1.favoritedish())
  console.log (Chef2.favoritedish())




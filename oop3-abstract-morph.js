/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error("You are unable to instantiate Abstract Class Creature");
    }
  }
  act() {
    throw new Error("This is an abstract method which you can never invoke!");
  }
  move() {
    throw new Error("This is an abstract method which you can never invoke!");
  }
}

class Human extends Creature {
  constructor(name, weight) {
    super();
    this.name = name;
    this.weight = weight;
  }
  act() {
    console.log(
      `${this.name} likes to act strong and sometimes fails a lift in the gym!`
    );
  }
  move() {
    console.log(`${this.name} moves 225 lbs like its just the bar!`);
  }
  bench() {
    console.log(
      `${this.name} can bench up to 205 pounds on the bench at only ${this.weight} body weight!`
    );
  }
}
let kevin = new Human("Kevin", "157 lbs");
kevin.act();
kevin.move();
kevin.bench();
class Bird extends Creature {
  constructor(name, weight) {
    super();
    this.name = name;
    this.weight = weight;
  }
  act() {
    console.log(
      `${this.name} likes to act fast as it flies through the skies!`
    );
  }
  move() {
    console.log(`${this.name} moves with the air currents to perserve energy!`);
  }
  carry() {
    console.log(
      `${this.name} can carry up to 3-4 pounds which is a third of their average weight of ${this.weight}!`
    );
  }
}
let eagle = new Bird("Eagle", "8-12 lbs");
eagle.carry();
eagle.act();
eagle.move();
class Fish extends Creature {
  constructor(name, color1, color2) {
    super();
    this.name = name;
    this.color1 = color1;
    this.color2 = color2;
  }
  act() {
    console.log(`${this.name} likes to act funny!`);
  }
  move() {
    console.log(`${this.name} moves through the ocean as he defies his dad!`);
  }
  swim() {
    console.log(
      `${this.name} likes to swim with his little fin. He is super recognizable because of his ${this.color1} and ${this.color2} body!`
    );
  }
}
let clownfish = new Fish("Nemo", "orange", "black");
clownfish.act();
clownfish.move();
clownfish.swim();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + " is eating");
  }

  sleep = () => {
    console.log(this.name + " is sleeping");
  };

  code = function () {
    console.log(this.name + " is coding");
  };

  repeat = function () {
    console.log(this.name + " is repeating the above steps, yet another time");
  };

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      "For the methods to work, the methods' format must be the same, for example if sleep is a arrow function on the parent it must be an arrow function on the child."
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + " loves to teach before eating");
  }

  sleep = () => {
    console.log(this.name + " sleeps after preparing the lesson plan");
  };

  code = function () {
    console.log(this.name + " codes first, then teaches it the next day.");
  };

  repeat = function () {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  };
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.

  //eat method should print out - <stduent name> studies, then eats

  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + " studies, then eats pizza.");
  }

  sleep = () => {
    console.log(
      this.name +
        " studies coding so much, that they dream about it in their sleep!"
    );
  };

  code = function () {
    console.log(
      this.name +
        " was first overwhelmed by coding, but kept at it, and now has become a coding guru!"
    );
  };

  repeat = function () {
    console.log(
      this.name +
        " keeps on studying, coding, eating, working out, sleeping and puts it all on repeat!"
    );
  };
}

const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  constructor(food1, food2, food3) {
    this.food1 = food1;
    this.food2 = food2;
    this.food3 = food3;
  }
  prepare() {
    console.log(
      `The cook is cooking ${this.food1}, ${this.food2} and ${this.food3}`
    );
  }

  explain = () => {
    console.log(
      "To make prepare also print out the foods the cook is cooking. I moved the arguments from prepare to a constructor and assigned them with the this keyword to access them inside the prepare function."
    );
  };
}

const cook = new Cook("turkey", "salami", "pizza");

cook.prepare();

cook.explain();

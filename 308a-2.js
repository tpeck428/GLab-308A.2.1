//Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }
//     console.log(adventurer);

// Nested arrays are useful, but so are nested objects. 
//Let’s give Robin a companion to travel with – a furry friend they call “Leo.”

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
// }
// console.log(adventurer);
//Add a “companion” sub-object to “Leo” with the following properties:
//The companion’s name is “Frank.”
//The companion’s type is “Flea.”
//The companion has its own belongings, which includes a small hat and sunglasses.

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: "a small hat and sunglasses",
//         }
//     },//adding method for dice rolls
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//         }
// };
// adventurer.roll();
// console.log(adventurer);

//Part 2: Class Fantasy
//create class for Robin using classes
class Character {
    constructor (name){
        this.name = name;
        this.health = 10;
        this.inventory = []
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        }
}
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
// console.log(robin.companion);
// robin.companion.roll();

//Part 3 - Class Features
class Adventurer extends Character {
    constructor (name, role, alignment) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.alignment = alignment;
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    investigate() {
        console.log(`${this.name} is investigating...`);
        super.roll();
    }
    charm () {
        console.log(`${this.name} is putting on the charm...`);
        super.roll();
    }
  }
  let Keothi = new Adventurer('Keothi', 'Rogue', 'Lawful Neutral');
  //change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
  let Robin = new Adventurer('Robin', 'Fighter', 'Chaotic Good');// figure out how to make it run with the proper inventory
//   console.log(Keothi.investigate());
// Keothi.charm();
// Keothi.investigate();
Robin.scout();
console.log(Robin);
console.log('--------------')

  //create a Companion class with properties and methods specific to the companions.

class Companions extends Character{
    constructor(name, type){
        super(name);
        this.type = type;
    }
    investigate(){
        console.log(`${this.name} is investigating...`);
        super.roll();
    }
    stealth(){
        console.log(`${this.name} is trying to be stealthy...`);
        super.roll();
    }
}
let Fluffy = new Companions('Fluffy', 'void dog');
let Beastie = new Companions('Beastie','raven')
  //change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
let Leo = new Companions('Leo', 'cat')
let Frank = new Companions('Frank', 'flea'); // figure out how to make it run with the proper inventory
// console.log(Fluffy);
// console.log(Beastie);
// Fluffy.stealth();
// Beastie.investigate();
// console.log(Companions); /doesn't work
Leo.investigate();
Frank.stealth();
console.log(Frank);

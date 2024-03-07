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

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: "a small hat and sunglasses",
        }
    },//adding method for dice rolls
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        }
};
// adventurer.roll();
// console.log(adventurer);

//Part 2: Class Fantasy
//create class for Robin using classes
class Character {
    constructor (name){
        this.name = name;
        this.health = 10;
        this.inventory = ["sword", "potion", "artifact"]
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
robin.companion.roll();

//Part 3 - Class Features


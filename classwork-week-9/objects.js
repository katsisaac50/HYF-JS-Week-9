



// function personFactory() {
//     let name;
    
//     return {

//         getName: () => {
//             return name;
//         },
//         setName: newName => {
//             name = newName;
//         },

//         // age: 123,
        
//     };
// }

// // const newPerson = personFactory();

// // newPerson.setName("A new fancy name");
// // console.log(newPerson.getName());


// // newPerson.name = "hahahahah";
// // console.log(newPerson.getName());


// const person1 = personFactory();
// const person2 = personFactory();

// console.log('person1 === person2', person1 === person2);

// // const person = {
// //     name: "Murphy",
// //     age: 21,
// // };

// // person.country = 'USA';
// // person['mothertongue'] = 'English';

// // person['country'] = 'Denmark';

// // person.firstName = "Murphy";



function createShoppingCart() {
    let shoppingList = [];

    return {
        clear: () => {
            shoppingList = [];
        },
        includes: item => shoppingList.includes(item),
        add: item => shoppingList.push(item),
        getAll: () => Array.from(shoppingList),
    };
}


const cart = createShoppingCart();

cart.add("Apple");
cart.add("orange");
cart.add("Milk");

console.log(cart.getAll());

cart.clear();

console.log(cart.getAll());
cart.add("Milk");
console.log(cart.getAll());



// object literal, written in the classic style
const car = {
    doors: 5,
    color: "White",
    topSpeed: 140,
    manufacturer: {
        name: "Toyota"
    },
    start: () => "Car has started",
    currentSpeed: 0,
    increaseSpeed: function(increase) {
        // this.currentSpeed += increase;
        this.currentSpeed += increase;
    },
    description: function(){
        // this.start();
        // this.increaseSpeed(20);
        // return "This is a " + this.color + " "
        // + this.manufacturer.name + ".";
        // new string literals
        return `This is a ${this.color} ${this.manufacturer.name}.`;
    }
};

// const a = 10;
// a += 5;

// argument destructuring
// const [a, b, , d] = [1, 2, , 4];

car.increaseSpeed(10);
car.increaseSpeed(12);
// car.currentSpeed += 5;
// console.log(car.currentSpeed);
console.log(car.description());
// console.log(JSON.stringify(car));
// console.log(JSON.parse(JSON.stringify(car)))


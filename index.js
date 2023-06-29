console.log('Hello, World ! from JS from that seaparate file');  

let name2 = "Mikhi";
console.log(name2);

let firstName = "Mikhilesh";
let lastName = 'Hirphode';

let name;
console.log(name);

const rate = 8.5;
console.log(rate);

// const rate2 = 8.5;
// rate2 = 3.5
// console.log(rate2);


//variables

let nameMine = 'mikhi';
let age = 30;
let isApproved = true;
let firstNameMine = 'Mikhilesh';
let lastNameMine = undefined;
let mineLastMine = null;  //// to clear
console.log(typeof(lastNameMine));
console.log(typeof(mineLastMine));
console.log("\n\n")

/*
1. Primitives/Value Types
    Number
    String
    Boolean
    undefined
    null
    
2. Reference Types
    Object
    Array
    Function

*/

////dynamic
// we can change data types at runtime

let variable = 35;
console.log(typeof(variable));

variable = 'this is sentence' ;
console.log(typeof(variable));


////////

let person = {
    name : 'Mikhi' , 
    age : 30
};

console.log(person);
console.log("\n");
console.log(person.name);
console.log(person.age);

//getter & setter   dot notation
person.name = "Mikhilesh";
console.log(person.name);
console.log("\n");
 
// getter & setter    another way   square notation
// this is used for runtime in the browser
person['age'] = 16;
console.log(person['age']);

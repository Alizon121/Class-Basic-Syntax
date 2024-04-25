

class Person {

constructor (firstName, lastName, age) {
this.firstName = firstName
this.lastName = lastName
this.age = age
}


introduce() {
  console.log(`Hi I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`)
// console.log(Object.values(this));
}


// Need to insert an array of person instances
static introducePeople(...info) {
let elements = info.every(el => el instanceof Person)

if (typeof info !== "object") {
  console.log('introducePeople only takes an array as an argument.')
}
else if (!elements instanceof Person) {
  console.log("All items in array must be Person class instances.")
} 
else {
  info.forEach((el) => el.introduce())
}

}


}



// Test Case Class Method (call on class instances)
const person1 = new Person("Andrew", "Lizon", 29)
// console.log(person1.introduce())

// Test Case Static Method
const introductions = Person.introducePeople("Andrew", "Lizon", 29)
console.log(introductions)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}

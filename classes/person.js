class Person {

constructor (firstName, lastName, age) {
this.firstName = firstName
this.lastName = lastName
this.age = age
}


introduce() {
  console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
// console.log(Object.values(this));
}


// Need to insert an array of person instances
static introducePeople(info) {
// let elements = info.every(el => el instanceof Person)
if (!Array.isArray(info)) {
  throw new Error('introducePeople only takes an array as an argument.');
  return
}
for (let el of info) {
 if (!(el instanceof Person)) {
  throw new Error("All items in array must be Person class instances.");
  return;
 }
} 
info.forEach((el) => el.introduce())
}


}



// Test Case Class Method (call on class instances)
const person = new Person("kristen", "chauncey", 38);
console.log(person.introduce())

// // Test Case Static Method
// const introductions = Person.introducePeople(person1)
// console.log(introductions)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}

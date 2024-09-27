class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class with and without providing values
  const person1 = new Person("Mithun", 25);
  const person2 = new Person();  // Uses default values
  
  // Call the getDetails method
  console.log(person1.getDetails()); // Output: Name: Alice, Age: 25
  console.log(person2.getDetails()); // Output: Name: Unknown, Age: 0
  
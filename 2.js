function getPerson(person) {
    try {
      // Check if the parameter is an object and has valid 'name' and 'age' properties
      if (typeof person !== "object" || !person.hasOwnProperty("name") || !person.hasOwnProperty("age")) {
        throw new Error("Invalid parameter type");
      }
  
      // Return the person's name and age as a formatted string
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      // Return the error message if an error occurs
      return error.message;
    }
  }
  
  // Example usage:
  console.log(getPerson({ name: "mithun", age: 30 })); // Output: Name: John, Age: 30
  console.log(getPerson({ name: "mithun" }));         // Output: Invalid parameter type
  console.log(getPerson("invalid"));                 // Output: Invalid parameter type
  
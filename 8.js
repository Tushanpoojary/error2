// Define the Student prototype
function Student(name) {
    this.name = name;
  }
  
  // Add the printDetails method to the Student prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, the student  is ${this.name}`);
  };
  
  // Instantiate a Student object
  const student1 = new Student("Mithun");
  
  // Call the printDetails method
  student1.printDetails();
  
class Employee {
    constructor(salary) {
      
    this.salary = salary;
    }
  
    getSalary() {
      return  '$${this.salary}.';
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee = new Employee ( 75000);
  
  // Call the getSalary method
  console.log(employee.getSalary());
  
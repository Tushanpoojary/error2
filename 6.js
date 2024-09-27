class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  
  // You don't need to instantiate the class to use a static method
  const result = Calculator.add(10, 5);
  
  console.log(result); // Output: 15
                                         
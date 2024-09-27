function convertToNumber(str) {
    try {
      // Attempt to convert the string to a number
      let num = Number(str);
  
      // Check if the result is a valid number
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
  
      return num;
    } catch (error) {
      // If conversion fails, return the error message
      return "Invalid number";
    }
  }
  
  // Example usage:
  console.log(convertToNumber("123"));  // Output: 123
  console.log(convertToNumber("abc"));  // Output: Invalid number
  console.log(convertToNumber("56.78"));  // Output: 56.78
  
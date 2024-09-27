class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;  // Use _password to differentiate it from the getter/setter
    }
  
    // Getter method to return the password as asterisks
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    // Setter method to validate and set a new password
    set password(newPassword) {
      const hasNumber = /\d/;                 // Checks if there's at least one digit
      const hasUppercase = /[A-Z]/;            // Checks if there's at least one uppercase letter
  
      if (newPassword.length >= 8 && hasNumber.test(newPassword) && hasUppercase.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Error: Password must be at least 8 characters long, contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of the User class
  const user = new User("john_doe", "Password1");
  
  // Get the password (as asterisks)
  console.log(user.password);  // Output: ********
  
  // Set a new valid password
  user.password = "NewPass123";
  console.log(user.password);  // Output: **********
  
  // Set an invalid password
  user.password = "short";     // Error: Password must be at least 8 characters long...
  
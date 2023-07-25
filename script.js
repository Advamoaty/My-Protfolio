function validateForm() {
  // Get form input values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Regular expression to check for numbers in the full name
  const nameRegex = /\d/;

  // Regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check full name for numbers
  if (nameRegex.test(fullName)) {
    alert("Full Name should not contain numbers.");
    return false;
  }

  // Check mobile number length
  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Mobile Number should be 10 digits.");
    return false;
  }

  // Check email format
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email Address.");
    return false;
  }

  // If all validations pass, the form will be submitted
}

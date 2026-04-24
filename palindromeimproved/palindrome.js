// ---- CONCEPT 1: CLASSES & OBJECTS ----
// Class represents a word/phrase and checks if it's a palindrome
class PalindromeChecker {

  // Constructor stores the original input
  constructor(input) {
    // Save the raw input to the object
    this.raw = input;

    // Remove spaces and make lowercase so phrases work too
    this.cleaned = input.replace(/\s+/g, '').toLowerCase();
  }

  // ---- CONCEPT 2: LOOPS ----
  // Method to reverse the cleaned string using a loop
  reverse() {
    // Start with an empty string
    let reversed = '';

    // Loop backwards through the cleaned string, building the reversed version
    for (let i = this.cleaned.length - 1; i >= 0; i--) {
      reversed += this.cleaned[i];
    }

    // Return the reversed string
    return reversed;
  }

  // Method to check if the cleaned string equals its reverse
  isPalindrome() {
    // Compare cleaned string to its reverse
    return this.cleaned === this.reverse();
  }
}

// ---- CONCEPT 3: FUNCTIONS ----
// Named function called by the button's onclick
function checkPalindrome() {

  // Grab the result div from the page
  const result = document.getElementById('result');

  // Get the user's input
  const raw = document.getElementById('wordInput').value;

  // ---- CONCEPT 4: STRING MANIPULATION & VALIDATION ----
  // Validate: show an error if the field is empty
  if (raw.trim() === '') {
    result.innerHTML = '<span style="color: orange;">Please enter a word or phrase.</span>';
    return;
  }

  // Create a new PalindromeChecker object with the user's input
  const checker = new PalindromeChecker(raw);

  // ---- CONCEPT 5: DECISION LOGIC (IF/ELSE) ----
  // Use the object's isPalindrome method to check the result
  if (checker.isPalindrome()) {
    // It is a palindrome
    result.innerHTML = '<span style="color: green;">Yes, "' + raw + '" is a palindrome!</span>';
  } else {
    // It is not a palindrome
    result.innerHTML = '<span style="color: red;">No, "' + raw + '" is not a palindrome.</span>';
  }
}

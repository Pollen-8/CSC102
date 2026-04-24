// Named function called by the button's onclick
function checkPalindrome() {

  // Grab the result div from the page
  const result = document.getElementById('result');

  // Get the user's input
  const raw = document.getElementById('wordInput').value;

  // Show an error if the field is empty
  if (raw.trim() === '') {
    result.innerHTML = '<span style="color: orange;">Please enter a word or phrase.</span>';
    return;
  }

  // Remove spaces and make lowercase so phrases work too
  const cleaned = raw.replace(/\s+/g, '').toLowerCase();

  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');

  // Check if the string equals its reverse
  if (cleaned === reversed) {
    // It is a palindrome
    result.innerHTML = '<span style="color: green;">Yes, "' + raw + '" is a palindrome!</span>';
  } else {
    // It is not a palindrome
    result.innerHTML = '<span style="color: red;">No, "' + raw + '" is not a palindrome.</span>';
  }
}

function validateForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById("zipCode").value;

    var fullName = firstName + " " + lastName;
    // Combines first and last name with a space

    // Check full name length
    if (fullName.length > 20) {
        document.getElementById("validationMessage").textContent =
            "Full name must be 20 characters or less.";

        document.getElementById("secretMessage").textContent = "";
        return false;
    }

    // If valid name, continue program
    document.getElementById("validationMessage").textContent = "";
    // Clears previous validation message

    document.getElementById("secretMessage").textContent =
        "Welcome " + fullName + "! The Secret Code is: 8675309.";
    // Displays secret message

    return false;
}
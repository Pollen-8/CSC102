// ---- CONCEPT 1: ARRAY ----
// Array holding the list of plants
var ourPlants = ["Pothos", "Spider Plant", "Aloe Vera", "Fiddle Leaf Fig", "Snake Plant", "Peace Lily"];

// ---- CONCEPT 2: FUNCTIONS ----
// Function to display all plants in the unordered list
function showPlants() {

  // Get the unordered list element from the page
  var ulPlants = document.getElementById("ulPlants");

  // Clear the list before re-adding plants (prevents duplicates)
  ulPlants.innerHTML = "";

  // ---- CONCEPT 3: LOOP ----
  // Loop through each plant in the array and add it to the list
  ourPlants.forEach(function(plant, index) {

    // Create a new list item element
    var li = document.createElement("li");

    // Set the text of the list item to the plant name
    li.textContent = plant;

    // When a list item is clicked, ask the user if they want to delete it
    li.onclick = function() {

      // ---- CONCEPT 4: DECISION LOGIC (IF/ELSE) ----
      // Ask the user to confirm the deletion
      if (confirm("Remove " + plant + "?")) {

        // Remove the plant from the array using its index
        ourPlants.splice(index, 1);

        // Refresh the list on the page
        showPlants();

        // Tell the user the plant was removed
        document.getElementById("divMessage").innerHTML = plant + " was removed.";
      }
    };

    // Add the list item to the unordered list
    ulPlants.appendChild(li);
  });
}

// Function to add a new plant from the text input
function addPlant() {

  // Get the value the user typed in, trimming any extra spaces
  var newPlant = document.getElementById("textNewPlant").value.trim();

  // ---- CONCEPT 5: STRING VALIDATION ----
  // If the input is empty, show an error message and stop
  if (newPlant === "") {
    document.getElementById("divMessage").innerHTML = "Please enter a valid plant name.";
    return;
  }

  // Add the new plant to the array
  ourPlants.push(newPlant);

  // Refresh the list to show the new plant
  showPlants();

  // Tell the user the plant was added
  document.getElementById("divMessage").innerHTML = newPlant + " was added.";

  // Clear the text input so it's ready for another entry
  document.getElementById("textNewPlant").value = "";
}

// Call showPlants once when the page first loads to display the initial list
showPlants();

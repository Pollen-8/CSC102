// 
// CSC102 Week 13 — Pizza Menu JavaScript
// External JS file (no JS code in the HTML!)
// 

// 2D array holding all pizza data.
// Each inner array = one row: [name, category, ingredients, price, calories]
const pizzas = [
  ["Cheese",    "Vegetarian", "Sauce, Mozzarella",                "$10", "1000"],
  ["Pepperoni", "Meat",       "Sauce, Mozzarella, Pepperoni",     "$12", "1200"],
  ["Hawaiian",  "Meat",       "Sauce, Mozzarella, Ham, Pineapple","$15", "1350"],
  ["Veggie",    "Vegetarian", "Sauce, Mozzarella, Onions, Peppers","$12", "950"],
  ["Deep Dish", "Meat",       "Sauce, Mozzarella, Ham, Extra Dough","$15","2000"],
];

// Constants for column indexes — makes the loop easier to read
const NAME        = 0;
const CATEGORY    = 1;
const INGREDIENTS = 2;
const PRICE       = 3;
const CALORIES    = 4;

// Function to build the table rows using the pizzas array
function buildTable() {
  const table = document.getElementById("tablePizza");

  // Loop through each pizza in the 2D array
  for (let i = 0; i < pizzas.length; i++) {
    // Create a new table row for this pizza
    const tr = document.createElement("tr");

    // Nested loop: go through each column in the current pizza row
    for (let j = 0; j < pizzas[i].length; j++) {
      const td = document.createElement("td");
      td.textContent = pizzas[i][j];
      tr.appendChild(td);
    }

    // Add the completed row to the table
    table.querySelector("tbody").appendChild(tr);
  }
}

// Call the function to populate the table when the page loads
buildTable();

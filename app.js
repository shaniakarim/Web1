// Make sure the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {

    // Task 2: Button to print "hello world" to console and Task 3: Change the <h1> text
    const myButton = document.getElementById("my-button");
    myButton.addEventListener("click", function() {
        console.log("Hello world"); // Task 2: Print to console
        document.querySelector("h1").innerText = "Moi maailma"; // Task 3: Change <h1> text
    });

    // Task 4 & 5: Add custom text from textarea to the unordered list
    const addButton = document.getElementById("add-data");
    addButton.addEventListener("click", function() {
        const ul = document.getElementById("my-list");
        const userInput = document.getElementById("text-input").value.trim();

        // Check if the input is empty; use fallback text for testing
        const textToAdd = userInput !== "" ? userInput : "Test item";

        const li = document.createElement("li"); // Create a new <li> element
        li.innerText = textToAdd; // Set the text of the <li> to the user's input or fallback
        ul.appendChild(li); // Append the <li> to the <ul>

        // Clear the textarea for the next input
        document.getElementById("text-input").value = "";
    });
});


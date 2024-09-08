// Make sure the document is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Task 2: Print 'Hello world' to the console when the button is clicked
    document.getElementById("my-button").addEventListener("click", function() {
        console.log("Hello world");
    });

    // Task 3: Change the <h1> text to 'Moi maailma' when the button is clicked
    document.getElementById("my-button").addEventListener("click", function() {
        document.querySelector("h1").innerText = "Moi maailma";
    });

    // Task 4 & 5: Add custom text from textarea to <ul> list
    document.getElementById("add-data").addEventListener("click", function() {
        const ul = document.getElementById("my-list"); // Target the <ul> element
        const userInput = document.getElementById("text-input").value; // Get the value from the <textarea>
        
        if (userInput.trim() !== "") { // Check if the input is not empty or just spaces
            const li = document.createElement("li"); // Create a new <li> element
            li.innerText = userInput; // Set the text of the <li> to the user's input
            ul.appendChild(li); // Append the <li> to the <ul>
        } else {
            alert("Please enter text before adding to the list."); // Alert if the input is empty
        }
    });
});


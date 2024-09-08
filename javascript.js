// Task 2 & 3: Print 'hello world' to console and change the <h1> text
document.getElementById("my-button").addEventListener("click", function() {
    console.log("hello world");
    document.querySelector("h1").innerText = "Moi maailma"; // Change text in <h1>
});

// Task 4 & 5: Add custom text from textarea to <ul> list
document.getElementById("add-data").addEventListener("click", function() {
    const ul = document.getElementById("my-list");
    const li = document.createElement("li");
    const userInput = document.getElementById("text-input").value;
    li.innerText = userInput || "Default Item"; // Fallback to default text if input is empty
    ul.appendChild(li);
});

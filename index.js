
// If the script runs before the element is loaded, you'll encounter this error. Consider using the DOMContentLoaded event to ensure the DOM is fully loaded before executing your script.
document.addEventListener("DOMContentLoaded", function () {
  showList(); // Show tasks when the DOM is fully loaded
  addTask(); // Bind the addTask function to the button click
});

    // Element initialization 
     const inputBox = document.getElementById("input-box");
     const listContainer = document.querySelector(".list-container");
     const button = document.getElementById("button");
     
     // error handler box
    let errorHandler = document.getElementById("errorHandler");
    errorHandler.innerHTML = "";
    // event handler 
    button.addEventListener("click", addTask);

function addTask(event) {
  let trimeValue = inputBox.value.trim();
  if (trimeValue === "") {
    errorHandler.innerHTML= "You have to write something!";
      errorHandler.style.display = "block";
       // alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.textContent = trimeValue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
      errorHandler.style.display = "none";
    // Use the multiplication sign (×) for the close button
    span.innerHTML = "\u00d7";
    span.style.color = "red";
    li.appendChild(span);
    inputBox.value = "";
  }
 
  saveData();
}

// Click event for the listContainer
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName  ===  "LI") {
    e.target.classList.toggle("checked"); // Check/uncheck the task
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();// removing parentElement
    saveData();
}
}, false)

// Function to save data to localStorage
const  saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML)
}

// Function to show the list from localStorage
const showList = () => {
  listContainer.innerHTML = localStorage.getItem("data") || ""; // Get tasks or empty string if none
}

// Call showList when the script runs
showList();

    
 

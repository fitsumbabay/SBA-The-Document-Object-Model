
// If the script runs before the element is loaded, you'll encounter this error. Consider using the DOMContentLoaded event to ensure the DOM is fully loaded before executing your script.
document.addEventListener("DOMContentLoaded", addTask);

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
    errorHandler.style.display = "none";
    let li = document.createElement("li");
    li.textContent = trimeValue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    // Use the multiplication sign (×) for the close button
    span.innerHTML = "\u00d7";
    span.style.color = "red";
    li.appendChild(span);
    inputBox.value = "";
  }
  saveData();
}


listContainer.addEventListener("click", function (e) {
  if (e.target.tagName  ===  "LI") {
    e.target.classList.toggle("checked") // checking the classList
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();// removing parentElement
    saveData();
}
}, false)

// placeholder for saveData implementation.
const  saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML)
}

const showList = () => {
listContainer.innerHTML = localStorage.getItem("data");
}

console.log(showList);

    
 

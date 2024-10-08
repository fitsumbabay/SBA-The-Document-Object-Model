const inputBox = document.getElementById("input-box").value;
const listContainer = document.getElementById("list-container");
const errorHandler = document.getElementById("errorHandler");

errorHandler.innerHTML = "";

function addTask() {

    if (inputBox === '') {
        errorHandler.innerHTML ="You have to write something!"
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox;
        listContainer.appendChild(li)
    }
    
    
}
// Complete the function

function addItem() {
    // Get the user input
     //Taking the text the user types into the form and saving in a variable
    let newItemText = document.getElementById("newTask").value;
   
    // Check if the input is empty. If it is empty, return a alert that says, "Please enter an item"
    
    if (newItemText === "") {
       return alert ("Please enter an item")
    }

    //add your code here

    // Create a new list item element
    let listItem = document.createElement("li");
    
    // Set the text content of the new list item
    listItem.textContent = newItemText;
    console.log(listItem.textContent);

    // Get the list where we want to add the new item
    let itemList = document.getElementById("taskList");
    console.log(itemList);

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    document.getElementById("newItem").value = "";
}

document.getElementById("addButton").addEventListener("click", addItem);
// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".

let headingElement = document.getElementById("heading");
headingElement.textContent = "DOM Updates";

null
undefined


// ********************** Exercise 2 ********************** //
// In the last div, use innerHTML to replace all of the content with a span tag that has the text 'Hello World'.

let changeTag = document.querySelector(`#test`);
changeTag.innerHTML = "<span>Hello World</span>";
console.log(changeTag);



// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".

let listN = document.getElementById("list");
let newListItem = document.createElement("li");
let newListContent = document.createTextNode("Item 4");
newListItem.appendChild(newListContent);
document.body.insertBefore(newListItem, listN);

// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.

let changeColor = document.getElementById("container").style.backgroundColor = "blue";

//add css file, add class name to div with ID,use class name to change background color
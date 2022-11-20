const input = document.getElementById("item-addition");
const groceryItems = document.getElementById("grocery-list");
const submitBtn = document.getElementById("submit");
const clearBTN = document.getElementById("clear");
const darkMode = document.getElementById("dark");
const TodoDay = document.getElementById("weekday");
const TimeOfDay = document.getElementById("time");
const inputWarning = document.getElementById("Warning");
let dark = false; //preset for dark mode functionality
//todo list code
//submit button code
function addTodo(e) {
  e.preventDefault();
  if (input.value != "") {
    const inputVal = input.value; // grabs users input
    const newListItem = document.createElement("li"); //creates a new list item
    newListItem.innerHTML = inputVal;
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check");
    checkBtn.innerHTML = "✓";
    newListItem.appendChild(checkBtn);
    const TrashBtn = document.createElement("button");
    TrashBtn.classList.add("trash");
    TrashBtn.innerHTML = "X";
    newListItem.appendChild(TrashBtn);
    groceryItems.append(newListItem); //appends the list item to the list
    input.value = ""; // clears the value thats entered after submitted
  } else if (input.value === "") {
    //removes red warning after 1 sec
    input.style.borderColor = "red";
    function removeColor() {
      input.style.borderColor = "inherit";
      inputWarning.style.display = "none";
    }
    setTimeout(removeColor, 1000); // removes color after 1 sec
  }
}
submitBtn.addEventListener("click", addTodo); // runs the function above

//Delete function
groceryItems.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  e.preventDefault();

  const item = e.target; //grabs the target of what is being clicked
  if (item.classList[0] === "trash") {
    const todo = item.parentElement;
    todo.remove();
  }
  //checkmark function
  if (item.classList[0] === "check") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    if (item.classList[0] === "check") {
      var complItems = document.querySelectorAll(".completed");
      var itemCount = complItems.length;
      clearBTN.innerHTML = `Clear All`; // counts the items that are selected
    }
  }
}
//clear button
//clears everything from the list that is checked off

clearBTN.addEventListener("click", (e) => {
  const listItems = groceryItems.querySelectorAll("li");
  listItems.forEach((item) => {
    if (item.classList.contains("completed")) {
      item.remove();
    }
  });
});

// Dark Mode code
darkMode.addEventListener("click", changeColor);
function changeColor() {
  const todoBody = document.body;
  dark = !dark;
  if (dark === true) {
    todoBody.classList.add("darkBody");
  } else {
    todoBody.classList.remove("darkBody");
  }
}
//greeting code
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // week day array
const date = new Date(); // uses the date method
const day = weekday[date.getDay()]; //aligns the weekday with the date method
const time = date.getHours();
TodoDay.style.color = "inherit";
TodoDay.innerHTML = day; // displays the day of the week above input
if (time > 17) {
  // changes the greeting depending on the time of day
  TimeOfDay.innerHTML = "Good Evening";
} else if (time < 17 && time > 12) {
  TimeOfDay.innerHTML = "Good Afternoon";
} else if (time < 12) {
  TimeOfDay.innerHTML = "Good Morning";
}

//Activity 1:Selecting and Manipulating Elements

//Task-1

document.getElementById("id1").innerHTML = "Hello Sagar";

//Task-2

// document.querySelector(".classes").style.backgroundColor = "yellow";

//Activity 2: Creating and Appending Elements

//Task-3

const newElement = document.createElement("div");
document.body.appendChild(newElement).innerHTML = "Hello World";

//Task-4

const newLiElement = document.createElement("li");
document.querySelector("ul").appendChild(newLiElement).innerHTML = "Bikes";

//Activity 3:Removing Elements

//Task-5

// document.querySelector('#id1').remove()

//Task-6

const selector = document.querySelector("ul");
// selector.removeChild(selector.lastChild);

//Activity 4: Modifying Attributes and Classes

//Task-7

// document.querySelector("img").src =
// "https://media.geeksforgeeks.org/auth-dashboard-uploads/createImprovementIcon.png";

//Task-8
const e=document.querySelector('.classes');
e.classList.remove('classes')
e.classList.add('div1')

//Activity 5:Event Handling

//Task-9

const button = document.querySelector("button");
let check = true;
button.addEventListener("click", () => {
  if (check) {
    document.querySelector("img").src =
      "https://media.geeksforgeeks.org/auth-dashboard-uploads/createImprovementIcon.png";
    check = !check;
  } else {
    document.querySelector("img").src =
      "https://media.geeksforgeeks.org/auth-dashboard-uploads/suggestChangeIcon.png";
    check = !check;
  }
});

//Task-10

const element = document.querySelector("div");
element.addEventListener("mouseover", (event) => {
  event.target.style.border = "2px solid red";
  setTimeout(() => {
    event.target.style.border = "";
  }, 500);
});

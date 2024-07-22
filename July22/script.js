//Activity 1: Basic Event Handling

//Task 1:

const element=document.querySelector('#para-1');
const btn=document.querySelector('#changePara');
btn.addEventListener('click',()=>{
    element.innerHTML = "Hello Sagar";
})

//Task 2:

const image = document.querySelector('img');
image.addEventListener('dblclick',(e)=>{
    // console.log(e.target);
    e.target.style.opacity="0"
})

//Activity 2:Mouse Events

//Task 3:

element.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor="red"
})

//Task 4:
element.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundColor="";
})


//Activity 3: Keyboard Events

//Task 5:
const input=document.querySelector('input');
input.addEventListener('keydown',(e)=>{
    // console.log(e.key);
})
//task 6
const display=document.getElementById('display');
input.addEventListener('keyup',(e)=>{
    display.innerHTML=e.target.value
})

//Activity 4: Form events

//Task 7:

const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    console.log({name,password});
})

//Task 8:
const select=document.getElementById('mySelect');
select.addEventListener('change',(e)=>{
    document.getElementById('displayPara').innerHTML=`Selected Value is ${e.target.value}`
})

//Event Delegation

//Task 9:
const list=document.getElementById('myList');
list.addEventListener('click',(e)=>{
    // console.log(e.target.tagName);
    if(e.target.tagName==='LI'){
        console.log(e.target.textContent);
    }
})

//Task 10:

const list1 = document.getElementById("myList1");
const addChild=document.getElementById('addBtn');
list1.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
addChild.addEventListener('click',()=>{
    const newElement=document.createElement('LI');
    newElement.textContent="Computers";
    list1.appendChild(newElement)
})


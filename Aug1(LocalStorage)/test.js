//Activity 1:

//Task-1

// const key = "sagar";
// localStorage.setItem("token", key);

//Task-2

// const obj={
//     name:'sagar',
//     age:'20'
// }
// localStorage.setItem('token',JSON.stringify(obj));
// const retrievedData = localStorage.getItem("token");
// console.log(JSON.parse(retrievedData));

// Activity 2:

//Task-3:

// const form=document.querySelector('form');
// form.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   const name = document.getElementById("name").value;
// //   console.log(name);
//   const password = document.getElementById("password").value;
//   const obj = {
//     name,
//     password,
//   };
//   localStorage.setItem("token", JSON.stringify(obj));
//   const retrievedData = localStorage.getItem("token");
//   console.log(JSON.parse(retrievedData));
// })

//Task-4:

// localStorage.removeItem('token');

//Actvity 3:

//Task-5

// const key = "sagar";
// sessionStorage.setItem("token", key);
// console.log(sessionStorage.getItem('token'));

//Task-6

// const obj={
//     name:'sagar',
//     age:'20'
// }
// sessionStorage.setItem('token',JSON.stringify(obj));
// const retrievedData = sessionStorage.getItem("token");
// console.log(JSON.parse(retrievedData));

//Actvity 4:

//Task-7

const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
//   console.log(name);
  const password = document.getElementById("password").value;
  const obj = {
    name,
    password,
  };
  sessionStorage.setItem("token", JSON.stringify(obj));
  const retrievedData = sessionStorage.getItem("token");
  console.log(JSON.parse(retrievedData));
})

//Task-8

// sessionStorage.removeItem('token')

//Actvity 5:

//Task-9:

function retrieve(key1,key2){
    localStorage.setItem('token1',key1);
    sessionStorage.setItem('token2',key2);
    // console.log(localStorage.getItem('token1'));
    // console.log(sessionStorage.getItem('token2'));
}
retrieve('value1','value2')

//Task-10

function clearData(){
  localStorage.clear();
  sessionStorage.clear();
  if(localStorage.length==0){
    console.log("Local Storage is empty");
  }
  if (sessionStorage.length == 0) {
    console.log("Session Storage is empty");
  }
}

clearData();








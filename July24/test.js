//Activity 1: Basic error Handling with Try-catch

//Task-1

function errorHandling(num) {
  try {
    if (num % 2 == 0) console.log("Number is Divisble by 2");
    else throw new Error("Number is not Divisible by 2");
  } catch (error) {
    console.error(`${error}`);
  }
}
errorHandling(3);

//Task-2

function divide(a, b) {
  try {
    if (b == 0) throw new Error("Cannot Divide by zero");
    else if (b < 0) throw new Error("Cannot Divide by Negative number");
    else console.log(`${a} / ${b} = ${a / b}`);
  } catch (error) {
    console.error(`${error}`);
  }
}
divide(3, 0);

//Activity 2: Finally Block

//Task-3

function checkNumber(num) {
  try {
    if (isNaN(num)) {
      throw new Error(`${num} is not a number`);
    } else {
      console.log(`${num} is a number`);
    }
  } catch (error) {
    console.error(`${error}`);
  } finally {
    console.log("Program Completely Executed");
  }
}
checkNumber("sagar");

//Activity 3:

//Task-4

class checkCondition extends Error {
  constructor(msg) {
    super(msg);
  }
}
try {
  if (10 != 20) {
    throw new checkCondition("they are not equal");
  }
} catch (error) {
  console.error(error);
}

//Task-5

class checkValidation extends Error{
    constructor(msg){
        super(msg)
    }
}
function validation(str){
    if(!str)  throw new checkValidation("String is empty");
}
try {
    // if(validation("")) throw new checkValidation('String is empty');
    // else console.log("String is not Empty");
    validation("")
} catch (error) {
    console.error(error)
}

//Actvity 4: Error Handling in Promises

//Task-6 :
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('Promise is Rejected')
  }, 1000);
});

// promiseOne.catch((err)=>{
//     console.log(`Error Occured: ${err}`);
// })

//Task-7:

// async function promiseHandler(){
//     try {
//         await promiseOne;
//     } catch (error) {
//         console.log("Error Ocurred"+ error.message)
//     }
// }

//Activity 5: Gracefully Error Handling in fetch

//Task-8

// fetch('abcd.com').then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("Invalid URL ,Data can not be fetched",err);
// })

//Task-9

async function fetchData() {
  try {
    const result = await fetch("http://invalidurl.com");
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.error("Invalid URL ,Data can not be fetched", error.message);
  }
}
fetchData();

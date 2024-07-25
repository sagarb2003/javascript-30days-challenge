import axios from 'axios'
import _ from 'lodash'

//Activity 1: Creating and exporting modules

//Task-1

export function add(a,b){
    return `${a} + ${b} = ${a+b}`
}

//Task-2

export const obj={
    name:"sagar",
    age:20,
    details:function(){
        console.log(`Your name is ${this.name} and age is ${this.age}`);
    }
}

//Activity 2: Named and default exports

//Task-3

export function sub(a,b){
    return `${a} - ${b} = ${a - b}`;
}

//Task-4

export default function checkNumber(num){
    // console.log(isNaN(num));
    if(!isNaN(num)) return `${num} is not a number`;
    else return `${num} is  a number`;
}

//Activity 3: Importing Entire Modules

//Task-5:

// let num=123;
// module.exports={
//     num,
//     fetchData
// }


//Activity 4:

//Task 6:

var numbers = [1, 2, 3, 4];
var listOfNumbers = "";
_.each(numbers, function (x) {
  listOfNumbers += x + " ";
});
console.log(listOfNumbers);

//Task-7

async function fetchData(){
    try {
        const response = await axios.get(
          "https://api.github.com/users/sagarb2003"
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
// fetchData();


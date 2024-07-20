//Activity 1:Template literals

//Task-1

let name="sagar";
let age=20;
console.log(`${name} ${age}`);

//Task-2

let expression=`hello
how are you
good or not`
console.log(expression);

//Activity 2: Destructuring

//Task-3

const arr=[1,2,3,4];
const [n1,n2]=arr;
console.log(`${n1}  ${n2}`);

//Task-4

let book={
    author:'jk rowling',
    title:'harry potter'
}
const {author,title}=book;
console.log(author + title);

//Activity 3 : Spread and rest operators

//Task-5

let a=[1,2,3,4];
let arr1=[...a,5,6,7];
console.log(arr1);

//Task-6

function sum(...num){
    let n=num.length;
    let s=0;
    for(let i=0;i<n;i++){
        s+=num[i]
    }
    console.log(s);
}
sum(1,2,3,4)

//Activity 4:Default parameters

//Task-7
function product(num1,num2=5){
    return num1*num2;
}
console.log(product(7));

//Activity 5:Enhanced object literals

//Task-8

let obj={
    name:'sagar',
    age:20,
    details:function(){
        return `Your name ${this.name} and age is ${this.age}`;
    },
}
console.log(obj);
console.log(obj.details());

//Task-9
let laptopBrand="Brand"
let storage="Storage"
let price="Price"
let obj1={
    [laptopBrand]:"Lenovo",
    [storage]:"256gb",
    [price]:35000
}
console.log(obj1);

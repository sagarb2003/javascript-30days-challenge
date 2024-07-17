//Activity 1:Function Declaration
//Task-1
function checkNumber(num){
    if(num%2==0) return "Even number"
    return "Odd Number"
}
console.log(checkNumber(5));
console.log(checkNumber(6));

//Task-2
function square(num){
    return num*num;
}
console.log(square(5));

//Activity-2 : Function Expression
//Task-3
const maxi=function(num1,num2){
    if(num1>num2) return `${num1} is greatest `
    return `${num2} is greatest `;
}
console.log(maxi(5,8));

//Task-4
const combine=(s1,s2)=>{
    return s1.concat(s2);
}
console.log(combine("sagar","singh"));

//Activity-3 Arrow Functions
//Task-5
const sum=(a,b)=> {return a+b};
console.log(sum(2,3));

//Task-6
const findChar=(s1,c)=>{
    if(s1.includes(c)) return true;
    return false;
}
console.log(findChar("sagar","b"));

//Activity-4 Function Parameters and Default Values
//Task-7
const product=(a,b=10)=>{
    return a*b;
}
// console.log(product(5,3));
// console.log(product(5));

//Task-8
const greet=(name,age=10)=>{
    console.log(`hello ${name} ,you age is ${age}`);
}
greet("sagar")

//Activity-5 High-Order Functions
//Task-9
const helper=(help,num)=>{
    return help(num);
}
function help(num){
    return "Hello from callback function "+num;
}
console.log(helper(help,7));

//Task-10
const abc=(f1,f2,v)=>{
    return f2(f1(v))
}
function f1(x){
    return x+2;
}
function f2(x){
    return x+3;
}
console.log(abc(f1,f2,3));
//Activity-1 : If-Else Statements
//Task-1
let a=-10;
if(a>0){
    console.log("Positive Number");
}
else if(a==0) console.log("Zero");
else console.log("Negative Number");

//Task-2
let age=15;
if(age>=18) console.log("You are eligible to vote");
else console.log("Not eligible to vote");

//Nested If-else Statements
//Task-3
let n1=10;
let n2=15;
let n3=17;
if(n1>n2){
    if(n1>n3) console.log(`${n1} is greatest number`);
}
else if(n2>n1){
    if(n2>n3) console.log(`${n2} is greatest number`);
}
if(n3> n1 && n3>n2) console.log(`${n3} is greatest number`);

//Activity-3 :Switch Case
//Task-4
let day=5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        break;
}
//Task-5
let score=52;
switch (true) {
    case score>=90:
        console.log('A');
        break;
    case score>=80 && score<90:
        console.log('B');
        break;
    case score>=70 && score<80:
        console.log('C');
        break;
    case score>=60 && score<70:
        console.log('D');
        break;
    case score>=50 && score<60:
        console.log('E');
        break;
    case score<50:
        console.log('F');
        break;
    default:
        break;
}

//Activity 4: Ternary Operator
//Task-6
let num1=10;
console.log(num1>0 ? 'Positive Number' : 'Negative Number');

//Activity-5: Combining Conditions
//Task-7
let year=2021;
if(year% 400==0){
    console.log('Leap Year');
}
else if(year%4==0) console.log('Leap Year');
else console.log('Not a leap year');
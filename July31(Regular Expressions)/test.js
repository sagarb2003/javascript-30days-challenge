//Activity 1:Basic regular expressions

//Task-1

//  The /g flag in a regular expression stands for "global."
const regex = /JavaScript/g;
const text = "JavaScript is a programming language. JavaScript is widely used.";
const matches = text.match(regex);
console.log(matches); // gives array of javascript

//Task-2

// for digits we \d
const digit= /\d/g;
const string="I am 12 years old,and have 4 pencils ";
console.log(string.match(digit));

//Activity 2:

//Task-3

const p=/\b[A-Z]\w*/g;
const str = "The quick brown Fox juMps over the lazy Dog.";
console.log(str.match(p));

//Task-4

// \d+ is basically for if there is a number of length 2 ('12') so it don't split into two digits
// but keep it as '12' only
const n=/\d+/g;
console.log(string.match(n));

//Activity 3:

//Task-5

const re = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let phoneNumber = "(123) 456-7890";

let match = phoneNumber.match(re);
console.log("Area code:", match[1]);
console.log("Central office code:", match[2]);
console.log("Line number:", match[3]);

//Task-6

const regex1 = /(\w+)@(\w+\.\w+)/;
let email = "johndoe123@gmail.com";

let match1 = email.match(regex1);
console.log("Username:", match1[1]);
console.log("Domain:", match1[2]);

//Activity 4:

//Task-7

const str1="Learn from the environment";
matches_start = str1.match(/^Learn/g)
console.log("String Matches",matches_start)

//Task-8

matches_end = str1.match(/environment$/g)
console.log("String Matches",matches_end)

//Actvity 5:

//Task-9

let regex2 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let password1 = "Password123!";
let password2 = "password123";

let match2 = regex2.test(password1);
let match3 = regex2.test(password2);
console.log("Password1:", match2);
console.log("Password2:", match3);

//Task-10

let regex3 = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,3}(\.[a-z]{2})?$/;
let url1 = "https://www.google.com";
let url2 = "www.google.com";
let url3 = "https://www.google.";
let match4 = regex3.test(url1);
let match5 = regex3.test(url2);
let match6 = regex3.test(url3);
console.log("URL1:", match4);
console.log("URL2:", match5);
console.log("URL3:", match6);
//Activity-1 : For Loop
//Task-1
for(let i=1;i<=10;i++){
    // console.log(i);
}
//Task-2
for(let i=1;i<=10;i++){
    // console.log(`5 X ${i} = ${5*i}`);
}

//Activity-2 :While loop
//Task-3
let i=1;
let sum=0;
while(i<=10){
    sum+=i;
    i++
}
// console.log(sum);
//Task-4
let num=10;
while(num>0){
    // console.log(num);
    num--;
}

//Activity-3 Do..while Loop
//Task-5
let n=1;
do {
    // console.log(n);
    n++;
} while (n<=5);

//Task-6
let f=1;
let a=5;
let j=1;
do {
    f=f*j;
    j++;
} while (j<=a);
// console.log(f);

//Activity-4 : Nested Loops
//Task-7
let s="";
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(j<=i) s+="*";
    }
    s+='\n';
}
// console.log(s);

//Activity 5: Loop Control Statements
let b=1;
while(b<=10){
    if(b==5){
        b++;
        continue
    }
    console.log(b);
    b++;
}
//Task 9
let c=1;
while (c <= 10) {
  if (c == 7) break;
  console.log(c);
  c++;
}
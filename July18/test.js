//Activity-1 :Array Creation and Access
//Task-1
const arr=[1,2,3,4,5]
console.log(arr);
//Task-2
console.log(`First Element: ${arr[0]} Last Element : ${arr[4]}`);

//Activity-2 :Array Methods(Basic)
//Task-3
arr.push(6);
console.log("Push" + arr);
//Task-4
arr.pop();
console.log("Pop" + arr);
//Task-5
arr.shift();
console.log("Shift" + arr);
//Task-6
arr.unshift(10)
console.log("Unshift" + arr);

//Activity-2 :Array Methods(intermediate)
//Task-7
const arr1=arr.map((num)=>{
    return num*2
})
console.log(arr1);
//Task-8
const arr2=arr.filter((num)=>{
    return num%2==0;
})
console.log(arr2);

//Task-9
const sum=arr.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum);

//Activity:4 Array Iteration
//Task-10
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
}
//Task-11
arr.forEach((num)=>{
    // console.log(num);
})

//Activity:5 Multidimensional Array
//Task-12
const arr3=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr3);
//Task-13
console.log(arr3[1][1]);

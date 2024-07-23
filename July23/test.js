//Activity 1: Understanding Promises
//Task 1:
const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let check=true;
        if(check) reject("Rejected")
        resolve("Resolved")
    },2000)
})
// promiseOne.then(()=>{
//     console.log("Promise Fullfilled");
// })

//Task 2:

// const promiseTwo=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("operation Failed");
//         reject()
//     },2000)
// })
// promiseTwo.catch(()=>{
//     console.log("Promise Rejected");
// })

//Activity 2:Chaining Promises

//Task 3:

const productName=()=>{
    return new Promise((resolve,reject)=>{
        resolve({name:'Iphone'})
    })
}
const productPrice=()=>{
    return new Promise((resolve,reject)=>{
        resolve({price:89000})
    })
}
productName().then((data)=>{
    console.log(data);
    return productPrice();
})
.then((price)=>{
    console.log(price);
})
.catch((e)=>{
    console.log(e);
})


//Activity 3: Using Async/await

//Task 4,5:

async function fn(){
    try{
        const response = await promiseOne;
        // console.log(response);
    }catch(e){
        console.log(e);
    }
    
}
fn();

//Activity 4: Fetching Data from an API

//Task 6:

fetch("https://api.github.com/users/sagarb2003")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data.login);
})
.catch((e)=>{
    console.log(e);
})

//Task 7:

async function fetchData(){
    const response = await fetch("https://api.github.com/users/sagarb2003");
    const data=await response.json();
    console.log(data.login);
}
fetchData();

//Activity 5:Concurrent Promises

//Task 8:

const one=new Promise((resolve,reject)=>{
    resolve('Promise one')
})
const two=new Promise((resolve,reject)=>{
    resolve("Promise two");
})
const three=new Promise((resolve,reject)=>{
    resolve("Promise three");
    // reject("Promise three");
})
Promise.all([one,two,three]).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
})

//Task 9:

const four = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise four");
    },500)
});
const five = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise five");
    }, 600);
});
const six = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise six");
    }, 700);
//   reject("Promise six");
});

//returns the single promise which resolves first
Promise.race([four,five,six]).then((values)=>{
    console.log(values);
})
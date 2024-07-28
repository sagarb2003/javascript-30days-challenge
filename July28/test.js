// Activity 1 : Basic Recursion

//Task-1

function factorial(n){
    if(n<=1) return 1;
    return n* factorial(n-1);
}

console.log("Factorial : ",factorial(5));

//Task-2

function fib(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fib(n-1)+fib(n-2);
}
console.log("Fibnocci: ",fib(6));

//Actvity 2: Recursion with Arrays

//Task-3

function sum(arr,ind){
    if(ind==0) return arr[0];
    return arr[ind] + sum(arr,ind-1);
}

console.log(sum([1,2,3,4,5],4));

//Task-4

function maxElement(arr,ind,maxi){
    if(ind<0) return maxi;
    if(arr[ind]>maxi){
        maxi=arr[ind];
        
    }
    return maxElement(arr, ind - 1, maxi);
}
console.log(maxElement([2,3,1,6,7,5],5,-1e9));

//Activity 3: String Manipulation with Recursion

//Task-5
function reverse(str,str1,ind){
    if(ind<0) return str1;
    str1+=str[ind];
    
    return reverse(str, str1, ind - 1);;
}
console.log(reverse("sagar","",4));

//Task-6

function palindrome(str,l,r){
    if(l>r) return false;
    if(l==r && str[l] == str[r]) return true;
    if(str[l]!=str[r]) return false;
    return palindrome(str,l+1,r-1);
}

console.log(palindrome("madams",0,5));

//Activity 4: Recursive Search

//Task-7

function binarySearch(arr,low,high,target){
    if(low>high) return -1;
    let mid = Math.floor((low + high) / 2);
    if(arr[mid]==target) return mid;
    if(arr[mid] > target) return binarySearch(arr, low, mid - 1, target);
    else return binarySearch(arr, mid + 1, high, target);
}

console.log("Element found at Index: ",binarySearch([2,3,4,5,6,7],0,5,9));

//Task-8

function countOccurrences(arr,ind,target,count){
    if(ind<0) return count;
    if(arr[ind]==target) count+=1;
    return countOccurrences(arr,ind-1,target,count);
}

console.log(countOccurrences([1,2,2,3,4,5,2],6,2,0));





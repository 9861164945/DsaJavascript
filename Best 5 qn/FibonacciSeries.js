/**
 * Fibonacci series:
 * 0 1 1 2 3 5 6
 * input n=3->>>> output :2
 */
//using normal for loop
const fibonacciSeries=function(n)
{
    const arr=[0,1];
    for (let index = 2; i<n ; index++) 
    {
arr.push(arr[index-1]+arr[index-2]);        
    }
console.log(arr);
};
fibonacciSeries(5);

// using Recursion here out put = input n=3 putput-2
const usingRecursion=function(n){
    if(n<=1) return n;
    return usingRecursion(n-1)+usingRecursion(n-2);
}
console.log(usingRecursion(5));
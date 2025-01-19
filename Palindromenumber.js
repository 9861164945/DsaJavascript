/*Ques-1 :Palindrome number
//What is palindrome number:an integer is a palindrome number when it reads same forward and backward
example:
input : x=121-----------> output:true
input : x=10 ------------>output:false
steps:
1-convert into string
121="121"=>["1","2","1"]
after reverse op=["121"]and because of +x it converted ointo a number 

*/
const num = prompt("Enter a Number:");
const isPalindrome = function(x)
{
    return x < 0 
        ? false 
        : x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(Number(num)); // typeConvertion input to a number
console.log(res);



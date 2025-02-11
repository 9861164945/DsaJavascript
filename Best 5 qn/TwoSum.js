/**
 * question-4
 * Givem an array of integers nums amd am integer target  return indicies of the two numbers such that they add up to target.
 * input:nums:[2,7,11,15] target=9
 * op-[0,1]because(nums[0]+numss[1]==9 we return [0,1];
 * input:nums:[3,2,4] target-6;
 * op-[1,2]
 * 
 */
//by using normal for loop
const twoSum=function(arr,target)
{
for(let i=0;i<arr.length;i++)
{
   for(let j=i+1;j<arr.length;j++) {

    //logic
    if(arr[i]+arr[j]==target){
        return [i,j];
    }
   }

}

};
console.log(twoSum([2,3,4,5,6],8)

);
//[3,2,4]=>3+2,3+4,2+4=>5,7,6;
//using javascript object
const byUsingObjtwoSum=function(arr,target){
    let obj={}; 
for (let index = 0; index < arr.length; index++) 
    {
    let element = arr[index];
 if(obj[target-element]>=0){
    return [obj[target-element],index];
 }   
else{
    obj[element]=index;
}
}
}
console.log(byUsingObjtwoSum([2,3,9,10,22,1132],1142));
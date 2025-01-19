/*

question-5:
Best Time to but and sell Stocks
->you are given am array prices where prices[o] is the price of a given stock
 on the i th day 
 you want to maximize your profit by choosing a sinhgle day to buy on e stock and chossing a dofferent day in the  future to sell that stock
  return the maximum profit if u cannot achieve any profit return 0 insted of loss -ve
  input:[7,1,5,3,6,4]= output:5;
  input:[7,5,4,3,2,1]= output:0;
  
*/
//Worst TIme commplexity
const buySellStockMaxProfit=function(arr)
{
    let globalProfit=0;
    for (let index = 0; index < arr.length-1; index++)
    {
        for(let j=index+1;j<arr.length;j++)
        {
            const currentProfit=arr[j]-arr[index];
            if(currentProfit>globalProfit){
                globalProfit=currentProfit;
            }

        }
    
    }
    return globalProfit;

}
console.log(buySellStockMaxProfit([1,2,3,4,56,7]));
//by using Greedy Algorithm
const byusingGreddyAlgoBuySellStock=function(arr){

    let minStockPurchasePrice=arr[0];
    let maxProfit=0;
    for (let i = 1; i < arr.length; i++) 
        {
            if(arr[i]<minStockPurchasePrice)
{
    minStockPurchasePrice=arr[i]
}
let currentProfit=arr[i]-minStockPurchasePrice;
maxProfit=Math.max(maxProfit,currentProfit);
        
    }
    return maxProfit;
}
console.log(byusingGreddyAlgoBuySellStock([1,2,3,4,56,7]));
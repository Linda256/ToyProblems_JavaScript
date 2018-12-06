/*
Method 1: brute force
Time Complexity: O(n*n)
Space Complexity: O(n*n)
*/

var getMaxProfit = function(stockPricesYesterday){
  let maxProfit=0;

  for (let i=0;i<stockPricesYesterday.length-1;i++){
    for (let j=1;j<stockPricesYesterday.length;j++){
      if (stockPricesYesterday[j]-stockPricesYesterday[i] > maxProfit){
        maxProfit =  stockPricesYesterday[j]-stockPricesYesterday[i]
      }
    }
  }
  return maxProfit;
}
/*
Method 2
Time Complexity: O(n)
Space Complexity: O(n)
*/
//initiate maxProfit=0; currSmall = stockPricesYesterday[0];
  //loop throuth stockPricesYesterday from position 1
      // if (stockPricesYesterday[i]<currSmall) currSmall = stockPricesYesterday[i];
      // else if (stockPricesYesterday[i]>currSmall){
          //currProfit =stockPricesYesterday[i]-currSmall;
          //maxProfit= currProfit > maxProfit ? currProfit : maxProfit
        //}
// return maxProfit
var getMaxProfit2 = function(stockPricesYesterday){
  let maxProfit=0;
  let currSmall = stockPricesYesterday[0];
  for(let i=1;i<stockPricesYesterday.length;i++){
     if (stockPricesYesterday[i]<currSmall){
        currSmall = stockPricesYesterday[i];
     } else if (stockPricesYesterday[i]>currSmall){
          currProfit =stockPricesYesterday[i]-currSmall;
          maxProfit = currProfit > maxProfit ? currProfit : maxProfit;
      }
  }
  return maxProfit;
}

let stockPricesYesterday = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit2(stockPricesYesterday));
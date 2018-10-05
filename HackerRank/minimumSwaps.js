/*
You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array we perform the following steps:
*/
function minimumSwaps(arr) {
//loop through arr
//count=0
//  if arr[i]!==i+1
//      j=arr.indexOf(i)
//      swap arr[i], arr[j];
//      count+=
// return count;
    let count=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]!==i+1){
            let j=arr.indexOf(i+1);
            swap(arr,i,j);
            count++;
        }
    }
    return count;
}

//method 2 for the numbers are not consecutive.
function minimumSwaps2(arr) {
//loop through arr
//count=0
//  if arr[i]!==i+1
//      j=arr.indexOf(i)
//      swap arr[i], arr[j];
//      count+=
// return count;
    let arrRef=arr.slice(0);
    arrRef.sort((a,b)=>a-b);
    console.log('arr:',arr);
    console.log('arrRef:',arrRef);
    let count=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]!==arrRef[i]){
            let j=arr.indexOf(arrRef[i]);
            swap(arr,i,j);
            count++;
        }
    }
    return count;
}

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}


let arr=[1,3,11,2,4,6,8];
console.log(minimumSwaps2(arr));
console.log(arr);
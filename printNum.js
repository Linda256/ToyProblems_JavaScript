/*
I: null
O: print out 1-100 if multiple of 3 print 'Fizz'
                   if multiple of 5 print 'Buzz'
                   if multiple of 3 and 5 print 'FizzBuzz'
C:O(n)
E:
*/

// var printNum = () => {

//   for (let i=1; i <=100 ; i++){
//     if (i%15 === 0) console.log('FizzBuzz');
//     else if (i%5 === 0) console.log('Buzz');
//     else if (i%3 === 0) console.log('Fizz');
//     else console.log(i);
//   }
// }

// printNum();

/*common divisor of two numbers
35, 105 output 35

I: two numbers int?
O: int
C:
E:


*/

var commonDiv = function(num1,num2){
  if (num1===num2 ) return num1;
  if (num1===0 || num2===0) return 0;
  let big = num2;
  let small = num2;
  num1>num2 ? big = num1 : small = num2;
  for (let i=small; i>0; i--){
    if (small%i===0 && big%i===0){
      return i;
    }
  }
}

console.log(commonDiv(9,6));

function getLastKid(n,t,i){
  //if (t>n) end = startpoint i + t%n
  //     if (end > n) end = end - n
  // if (t<n)
}
//arrow function won't bind 'this'.
const profile = {
  name: 'Linda',
  getName: ()=>{
    console.log(profile.name);
  }
}

const profile1 = {
  name: 'Linda',
  getName: function(){
    console.log(this.name);
  }
}

profile.getName();
profile1.getName();

//count the maxium number
var countMax = function(arr){
  //initiate max = 0, count = 0
  // loop through the arr update max and it associate count
  // return count

  let max=arr[0];
  let count=1;
  for (let i=1; i<arr.length; i++){
    if (arr[i]=== max){
      count++;
    }
    if (arr[i] > max){
      max=arr[i];
      count=1;
    }
  }
  console.log(max);
  return count;
}

let x = [1,2,3,2,3,3,4];

console.log(countMax(x));
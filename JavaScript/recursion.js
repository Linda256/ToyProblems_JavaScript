/********
recursion
*********/


Fibonacci sequence 0,1,1,2,3,5,8,13,21,34...
var fib=function(n){
  if(n===0) return -1;
  if(n===1) return 0;
  if (n===2) return 1;
  return fib(n-1)+fib(n-2);
}

let res=fib(5);
console.log(res);

n exponent of 2;
const expOfTwo=function(n){
  if(n<0) return 1/2*(1/expOfTwo(-n-1));
  if(n===0) return 1
  if(n===1) return 2;
  return 2*expOfTwo(n-1);
}

console.log(expOfTwo(-3));


//Power of a number;
function myPow(base,pow){
  if(pow<0) return 1/base * (1/myPow(base,(-pow-1)));
  if(pow===0) return 1;
  if(pow===1) return base;
  else if(base<0){
    return -base*myPow(base,pow-1);
  }
  return base*myPow(base,pow-1);
}

console.log('myPow',myPow(-3,-1));


function myPow(base,pow){
  let result=1
  let k=pow<0?-pow:pow;
  for(let i=0;i<k;i++) {
    result= pow<0?result*(1/base):result*base;;
  }
  if(result<0&&Math.abs(pow)%2===0) result=-result;
  return result;
}

console.log(myPow(-2,-3));


var sumFromOne=function(n){
  if(n===1) return n;
  else return n=n+sumFromOne(n-1);
}

let res=sumFromOne(5);
console.log(res);

function addToN(n){
  if(n===1) return n;
  else return n+addToN(n-1);
}

console.log(addToN(4));

function countDownFrom(n){
  if (n===0) return;
  console.log(n);
  return (countDownFrom(n-1))

}

countDownFrom(5);

module.exports=addToN;
//module.exports=myPow;


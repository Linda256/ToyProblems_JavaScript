/*
I: null
O: print out 1-100 if multiple of 3 print 'Fizz'
                   if multiple of 5 print 'Buzz'
                   if multiple of 3 and 5 print 'FizzBuzz'
C:O(n)
E:
*/

var printNum = () => {

  for (let i=1; i <=100 ; i++){
    if (i%15 === 0) console.log('FizzBuzz');
    else if (i%5 === 0) console.log('Buzz');
    else if (i%3 === 0) console.log('Fizz');
    else console.log(i);
  }
}

printNum();
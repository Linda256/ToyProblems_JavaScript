
/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/


var makeChange = function(total) {

  var output = 0;
  //var denominations = [1, 2, 5, 10, 20, 50, 100, 200];
  var denominations = [1, 2, 5];
  (function recurse (index, tot) {
    var currentDenomination = denominations[index];
    if (index === 0) {
      // support a lowest currency that is not 1
      tot % currentDenomination === 0 && output++;
      console.log("index in if:",index,"output:", output)
      return;
    }
    while (tot >= 0) {
      console.log('index before recurse in while:', index,'currentDenomination:',currentDenomination,'tot',tot)
      recurse(index - 1, tot);
      tot -= currentDenomination;
      console.log('index',index,'tot',tot)
    }
  })(denominations.length - 1, total);

  return output;
};




const makeChange2 = function(total) {
  const denominations = [1, 2];
  return combo(total,0,denominations);
}

const combo=function(total,currIndex,denominations){
  if(total===0) return 1;
  if(total<0) return 0;

  let nCombos=0;
  for(let i=currIndex;i<denominations.length;i++){
    nCombos+= combo(total-denominations[i],i,denominations)
  }

  return nCombos;
}

let total=4;
console.log(makeChange(total));
console.log(makeChange2(total));

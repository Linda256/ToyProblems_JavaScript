function toBinary(n){
    let stack=[];
    while(n>0){
        let d=Math.floor(n/2);
        let remaider=n%2;
        console.log(remaider);
        stack.push(remaider);
        n=d;
    }
    let result=[]
    while (stack.length>0){
      let curr=stack.pop();
      result.push(curr);
    }
    console.log('stack',stack);
    return result;
}

let result=toBinary(8);
console.log('result',result);

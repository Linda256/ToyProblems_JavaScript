/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 */
 /*
 I: String [](){}
 O: boolean
 */
 var balancedParens = function(input) {
  let left = ["(","{","["];
  let right =[")","}","]"];
  let stack=[];
  for (let i=0;i<input.length;i++){
    let index=left.indexOf(input[i])
    if(index>=0){
      stack.push(right[index]);
    }
    if(right.includes(input[i])){
      let paren=stack.pop();
      if(paren!==input[i]){
        return false;
      }
    }
  }
  if(stack.length>0) return false;
  return true;
 }

 let input ='[](){}';
 //let input=' var wow  = { yo: thisIsAwesome() }';
 //let input ='var hubble = function() { telescopes.awesome()';
 console.log(balancedParens(input));
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  const allAnagrams=function(str){
    let res=combination(new Set(),'',str);
    return Array.from(res);

  }

  function combination(res,ana,str){
    if(str.length===0) res.add(ana);

    for (let i=0;i<str.length;i++){
      combination(res,ana+str[i],str.substring(0,i)+str.substring(i+1));
    }
    return res;
  }

  //let str='abc';
  let str='dad';

  let anagrams = allAnagrams(str);
  console.log('method 1:', anagrams);

//method 2
  const allAnagrams2=function(str){
    let visited=[];
    let res=combination2([],'',str);
    return res;

  }

  function combination2(res,ana,str){
    if(str.length===0 && !res.includes(ana)) res.push(ana);

    for (let i=0;i<str.length;i++){
        combination2(res,ana+str[i],str.substring(0,i)+str.substring(i+1));


    }
    return res;
  }


  let str2='dad';

  let anagrams2 = allAnagrams2(str2);
  console.log("method 2:",anagrams2);
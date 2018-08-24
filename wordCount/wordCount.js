var wordCount = function(words){
  //create an object obj
  //loop through words arr
  // check the word is in obj or not
  // No, put word into obj as key, value 1;
  // Yes, increase the value by 1

 //put the data of obj into array wordsArr
//   put the value into occur[1], key into occur[0]
//   push occur int wordsArr

//sort the wordsArr based on value

  let obj = {};
  words.forEach((word)=>{
    if (obj.hasOwnProperty(word)===true){
      obj[word]=obj[word]+1;
    } else {
      obj[word]=1;
    }
  })
  let wordsArr = toArray(obj);
  let sortedWords = wordsArr.sort((a,b) => b[1]-a[1]);

  return sortedWords;
}

var toArray = (obj) =>{
  let wordsArr = [];
  for (let k in obj){
    wordsArr.push([k,obj[k]])
  }
  return wordsArr;
}

let words = ["java","python","javascript","python","javascript","java","java"]
let obj = wordCount(words);
console.log(obj);



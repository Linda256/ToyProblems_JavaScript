'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */
/*
O: result of the callback function
I: 1. Array of functions, 2. callback function
C:O(n)
E: ?

loop through tasks,
    for each task find the gcb,
    put the parameters of the call back into result(using arguments library to find arguments)

*/

var asyncMap2 = function(tasks, callback) {
  let results=[];
  let resultsCount=0

  for(let i=0;i<tasks.length;i++){
    tasks[i](function(val){
      console.log('val',val);
      results[i]=val;
      resultsCount++;
    console.log('i before if',i);
    if(resultsCount===tasks.length){
      callback(results);
    }
  })
    } 
}

asyncMap2([
    function(cb){
        setTimeout(function(){
          console.log('cb',cb);
          cb('one');
        }, 200);
      },
      function(cb){
        setTimeout(function(){
          cb('two');
        }, 100);
      }
     ],
      function(results){
        console.log(results);
     }
);

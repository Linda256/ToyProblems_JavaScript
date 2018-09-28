
/* New Year Chaos

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if and  bribes , the queue will look like this: .

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

q: an array of integers
Input Format

The first line contains an integer , the number of test cases.

Each of the next  pairs of lines are as follows:
- The first line contains an integer , the number of people in the queue
- The second line has  space-separated integers describing the final state of the queue.

Constraints

Subtasks

For  score
For  score

Output Format

Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than  people.

Sample Input

2
5
2 1 5 3 4
5
2 5 1 3 4
Sample Output

3
Too chaotic
*/
/*
initiate count = 0
loop through the arr
if (arr[i]>i+1)
      if arr[i]-i>3 return false;
      else count= arr[i]-i-1;
return count
*/

// function minimumBribes(q) {
//     let count = 0
//     for (let i=0;i<q.length;i++){
//         if (q[i]>i+1){
//           if (q[i]-i>3) return "Too chaotic";
//           else count= count+q[i]-(i+1);
//         }
//     }
//     return count;
// }

function minimumBribes(q) {
//loop through q starting from the last element
//if the element is greater than its index + 3 return (too chaotic)
//if an element is greater than its index+1
    //while it is greater than its indexkeep
        //swap it with the number at its right side
        //increase the count
    //set the index back 1 step to check curr item greater than its index+1 or not
//return count

    let count = 0;
    let len=q.length-1;
    for (let i=len;i>=0;i--){
      if (q[i]-i>3) return "Too chaotic";
      if (q[i]>i+1){
        let j=i;
        while(q[j]>j+1){
          let temp=q[j];
          q[j]=q[j+1];
          q[j+1]=temp;
          j++;
          count++;
        }
        i++;
      }
    }
    return count;
}

//let q=[2,1,5,3,4]
let q=[1,2,5,3,7,8,6,4]
//let q=[2,5,1,3,4]
console.log(minimumBribes(q));

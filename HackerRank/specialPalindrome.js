/*
Special Palindrome Again
A string is said to be a special palindromic string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special palindromic substring is any substring of a string which meets one of those criteria. Given a string, determine how many special palindromic substrings can be formed from it.

For example, given the string , we have the following special palindromic substrings: .

Function Description

Complete the substrCount function in the editor below. It should return an integer representing the number of special palindromic substrings that can be formed from the given string.

substrCount has the following parameter(s):

n: an integer, the length of string s
s: a string
Input Format

The first line contains an integer, , the length of . 
The second line contains the string .

Constraints

 
Each character of the string is a lowercase alphabet, .

Output Format

Print a single line containing the count of total special palindromic substrings.

Sample Input 0

5
asasd
Sample Output 0

7 
Explanation 0

The special palindromic substrings of  are 

Sample Input 1

7
abcbaba
Sample Output 1

10 
Explanation 1

The special palindromic substrings of  are 

Sample Input 2

4
aaaa
Sample Output 2

10
Explanation 2

The special palindromic substrings of  are 
*/
function substrCount(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++){
        let curr = s[i];
        let next = s[i + 1];
        let j = i;
        while (j<s.length && curr === s[j]) {
            count++;
            j++;
        }
        if (curr !== next) {
            let l = i - 1;
            let r = i + 1;
            while (l >= 0 && r < s.length && s[l] === next && s[r]===next) {
                l--;
                r++;
                count++;
            }
        }
    }
    return count;
}

//let s="aaaa";
let s="asasd";
//let s="abcbaba";
console.log(substrCount(s));
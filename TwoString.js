/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

For each pair of strings, return YES or NO.
*/


function twoStrings(s1, s2) {
    //check the length of s1, s2
    // loop through the shorter string
    //         if longer string contains the char from shorter string return true
    // return false
    let shortStr;
    let longStr;
    if (s1.length > s2.length) {
        shortStr = s2;
        longStr = s1;
    } else {
        shortStr = s1;
        longStr = s2;
    }
    for (let i =0; i<shortStr.length;i++){
        if (longStr.indexOf(shortStr.charAt(i)) !== -1) return "YES";
    }
    return "NO";
}
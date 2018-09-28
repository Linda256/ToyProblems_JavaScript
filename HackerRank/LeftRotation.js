/*
A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if left rotations are performed on array , then the array would become .

Given an array of integers and a number, , perform left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

    An array of integers .
    An integer , the number of rotations.

Input Format

The first line contains two space-separated integers and , the size of and the number of left rotations you must perform.
The second line contains space-separated integers .

Constraints

Output Format

Print a single line of space-separated integers denoting the final state of the array after performing left rotations.

Sample Input

5 4
1 2 3 4 5

Sample Output

5 1 2 3 4*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// method 1

function rotLeft(a, d) {
    let len=a.length;
    let a1=[];
    let a2=[];
    if (d>=a.length) return a;
    for (let i=d;i<len;i++){
        a1.push(a[i]);
    };
    for (let i=0;i<d;i++){
        a2.push(a[i]);
    };
    a1.push(...a2);
    a=a1;
    return a;
}
//method 2
function rotLeft2(a, d) {
    let len=a.length;
    if (d>=len) return a;
    let a1=a.slice(0,d);
    a=a.slice(d);
    a.push(...a1)
    return a;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


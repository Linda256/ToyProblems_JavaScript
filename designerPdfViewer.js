/*
When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.

In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

designerPdfViewer has the following parameter:

h: an array of integers representing the heights of each letter
word: a string
Input Format

The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
The second line contains a single word, consisting of lowercase English alphabetic letters.
*/


function designerPdfViewer(h, word) {
    //create an obj alphebet, put the alphebet as key and height from h as value
    // highest = 0
    // loop through the word, check the height of each char, update the hightest if necessary,
    //       if highest ===7, discontinue;
    //reture highest * word.length;
    let alphebet = {};
    alphebet.a = h[0];
    alphebet.b = h[1];
    alphebet.c = h[2];
    alphebet.d = h[3];
    alphebet.e = h[4];
    alphebet.f = h[5];
    alphebet.g = h[6];
    alphebet.h = h[7];
    alphebet.i = h[8];
    alphebet.j = h[9];
    alphebet.k = h[10];
    alphebet.l = h[11];
    alphebet.m = h[12];
    alphebet.n = h[13];
    alphebet.o = h[14];
    alphebet.p = h[15];
    alphebet.q = h[16];
    alphebet.r = h[17];
    alphebet.s = h[18];
    alphebet.t = h[19];
    alphebet.u = h[20];
    alphebet.v = h[21];
    alphebet.w = h[22];
    alphebet.x = h[23];
    alphebet.y = h[24];
    alphebet.z= h[25];

    let highest = 0;
    for (let i=0; i<word.length; i++){
        if (alphebet[word[i]]>highest) highest = alphebet[word[i]];
        if (highest === 7) break;
    }
    return highest*word.length;

}

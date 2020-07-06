'use strict'

function shortestWord (str) {
    const words = str.split(" ");;
    let shortWord;
    for (let i = 0; i < words.length; i++) {
        if (i==0 || shortWord.length > words[i].length) {
            shortWord = words[i];
        }
    }
    const answ = `The shortest word has ${shortWord.length} characters`;

    return answ;
}

console.log(shortestWord('london is a capital of great britain'));





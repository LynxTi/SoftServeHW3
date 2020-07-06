'use strict'
debugger

function twoOldestAges (allAges) {
    let twoBiggestAges = [0,0];
    for (let i = 0; i < allAges.length; i++) {
        if ( i==0 ||i == 1 || twoBiggestAges[1] < allAges[i] ) {
            twoBiggestAges.shift();
            twoBiggestAges.push(allAges[i]);   
        }
    }
    return twoBiggestAges;
}

const rezalt = twoOldestAges([10,15,-120,-1,0,27,35,54]);
console.log(rezalt);


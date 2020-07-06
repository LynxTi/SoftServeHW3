'use strict'
// debugger;
function sumOfMinimums (firstArr , secondArr) {
    let minimumVlue = (arr) => {
        let minNumber;
        console.log(arr);

        for ( let i = 0; i < arr.length; i++){
          if (i == 0 || arr[i] < minNumber) {
            minNumber = arr[i];
          }
        }
        console.log("____" + minNumber)
        return minNumber;
    }

    const firstMinNumber =  minimumVlue(firstArr);
    const secondMinNumber = minimumVlue(secondArr);

    return firstMinNumber + secondMinNumber;
}

const rezalt = sumOfMinimums([1,2,3,4], [-2,-3,-5,1]);
console.log(rezalt);

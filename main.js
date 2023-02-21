/* VARIABLE BANK */







/* FUNCTIONS */
const array = [1, 2, 3, 4, 5, 6, 7]; // 0, 6  last index of all is 6, length is 7
const array1 = [3, 50, 75, 43, 900, 756, 1];    // 0, 4
const array2 = [66, -2, 88, 94, 1000, 5, 29];       // 1, 4
const array3 = [4, 600, 746, null, 25, 5, 8];      // 0, 2
const array4 = [-66, -5, -88, -94, -1000, 0, -19];   // 4, 5                               
const array5 = [0, 0, 0, 0, 0, 0, 0];           // 0, 1
const empty = [];                               // -1, -1
const example = [17, 11, 60, 25, 150, 75, 31];   // 1, 4

/* helper functions */

function compareNumbers(a, b) {
  return b - a;
};

const inRange = (array, maxScore) => array.every((element) => element >= 0 && element <= maxScore); 
const pop = (array) => array.pop()
/* MAIN FUNCTIONS */

// function scoreSorter(array, maxScore) {
//   let sorted = [];
//   if (inRange(array, maxScore)) {
//     sorted = array.sort(compareNumbers);
//   } else { 
//     console.log('Scores must be in range of 1 - 1000. Please check scores for typos.');    <-----DONE
//   }
//   console.log(`${sorted} / ${maxScore}`);
//   return sorted;
// }; 
////////////////////////////////////////
////////////////////////////////////////

// function lowest(array) {
//   let currentLow = array[0];
//   for (const num of array) {
//     if (num !== null && num < currentLow) {
//       currentLow = num;
//       };
//     } return currentLow;
// };

// function lowest(array) {
//   let currentLow = array[0];
//   const popped = array.pop();
//   for (const num of array) {
//     if (num !== null && num < currentLow) {
//       currentLow = num;
//       };
//     }
//     array.push(popped);
//     return currentLow;
// };

// function highest(array) {
//     let currentHigh = array[0];
//     const shifted = array.shift();
//     for (const num of array) {
//       if (num > currentHigh) {
//         currentHigh = num;
//       }
//     } 
//     array.unshift(shifted);
//     return currentHigh;
//   };

// function maxProfitDays(array) {
//   const buyDay = array.indexOf(lowest(array));
//   let sellDay = array.indexOf(highest(array));                     THIS ACCOMPLISHED IT'S INTENDED PURPOSE, BUT THE PURPOSE WAS INCORRECT FOR THE EXERCISE. 
//   let sellPrice = 0;                                               STILL GREAT PRACTICE MANIPULATING ARRAYS
  
//   for (let i = buyDay; i < array.length; i++) {
//     if (array[i] > sellPrice) {
//       sellPrice = array[i];
//     }
//     sellDay = array.lastIndexOf(sellPrice);
//   }
//   if (buyDay === sellDay) {
//     sellDay += 1;
//   }
//   return [buyDay, sellDay];
// };


// console.log(maxProfitDays([150, 11, 60, 25, 150, 75, 31, 120]))
// // Expected output: [1, 4]

// console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 17]))
// // Expected output: [1, 4]

// console.log(maxProfitDays([160, 11, 60, 25, 150, 75, 31, 160]))
// // Expected output: [1, 7]

// console.log(maxProfitDays([17, 11, 60, 25, 150, 5, 31, 120]))
// // Expected output: [1, 4]
// console.log(maxProfitDays([17, 16]));


////////////////////////////////////////////////////////////////

// const array = [1, 2, 3, 4, 5, 6, 7]; // 0, 6  last index of all is 6, length is 7
// const array1 = [3, 50, 75, 43, 900, 756, 1];    // 0, 4
// const array2 = [66, -2, 88, 94, 1000, 5, 29];       // 1, 4
// const array3 = [4, 600, 746, null, 25, 5, 8];      // 0, 2
// const array4 = [-66, -5, -88, -94, -1000, 0, -19];   // 4, 5                               
// const array5 = [0, 0, 0, 0, 0, 0, 0];           // 0, 1
// const empty = [];                               // -1, -1                             
// const example = [17, 11, 60, 25, 150, 75, 31];   // 1, 4


function maxProfitDays(array) {
  //start with zero index and subtract it's value from every index in the array
  //then repeat that process for every index position in the array while maintaining
  //a constant highest difference value across all iterations then
  //return the indexes of the pair that make the largest positive difference
  let bigDiff = 0;
  let bigDiffIndexes = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= i; j--) {                               //SOLVED
      if ((array[j] - array[i]) > bigDiff) {
        bigDiff = (array[j] - array[i]);
        bigDiffIndexes = [i, j];
      }      
    }
  }
  return bigDiffIndexes;
};

console.log(maxProfitDays(array));
console.log(maxProfitDays(array1));
console.log(maxProfitDays(array2));
console.log(maxProfitDays(array3));
console.log(maxProfitDays(array4));
console.log(maxProfitDays(array5));





















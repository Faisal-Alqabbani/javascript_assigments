//  Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}

// Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
  console.log(Math.min(...arr));
  return Math.max(...arr);
}

// - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr) {
  const newArray = [];
  var odd = null;
  for (let i = 1; i < arr.length; i++) {
    if (!odd) {
      if (arr[i] % 2 !== 0) {
        odd = arr[i];
      }
    }
    newArray.push(arr[i]);
  }
  return odd;
}

//  Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleVision(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
}

// Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr) {
  var counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      counter++;
    }
  }
  arr[arr.length - 1] = counter;
  return arr;
}

//  Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function EvensAndOdds(arr) {
  var counterOdd = 0;
  var counterEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      counterOdd++;
      if (counterOdd === 3) {
        console.log("Thats Odd");
        counterOdd = 0;
      }
    } else {
      counterEven++;
      if (counterEven === 3) {
        console.log("thats Even");
        counterEven = 0;
      }
    }
  }
}

// Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function IncrementTheSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i]++;
    }
    console.log(arr[i]);
  }
  return arr;
}

// You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(arr) {
  const newArray = [];
  newArray.push(arr[0]);
  for (var i = 0; i < arr.length - 1; i++) {
    newArray.push(arr[i].length);
  }
  return newArray;
}

//  Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 7;
  }
  return arr;
}
// Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(arr) {
  return arr.reverse();
}

//  Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = arr[i] - arr[i] * 2;
    }
  }
  return arr;
}

function alwaysHungry(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("Yummmmmy");
      counter++;
    }
  }
  if (counter === 0) {
    console.log("Im humgry");
  }
}

// Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardtheCenter(arr) {
  var temp1 = null;
  var temp2 = null;
  for (var i = 0; i < arr.length / 2; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
      temp1 = arr[i];
      temp2 = arr[arr.length - (1 + i)];
      arr[i] = temp2;
      arr[arr.length - (1 + i)] = temp1;
    }
  }
  console.log(arr);
}

// Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaletheArray(arr, number) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3;
  }
  return arr;
}
console.log(scaletheArray([1, 2, 3], 3));

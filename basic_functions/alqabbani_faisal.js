// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function get1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEven1000() {
  for (let i = 2; i <= 1000; i += 2) {
    console.log(i);
  }
}
// getEven1000();
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function SumOdd5000() {
  var sum = 0;
  for (let i = 1; i <= 5000; i += 2) {
    sum += i;
  }
  console.log(sum);
}
// SumOdd5000();
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function IterateAnArray(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
// IterateAnArray([1, 2, 3, 4]);

// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr) {
  return Math.max(...arr);
}
// console.log(findMax([1, 2, 3, 4, 56, 3]));

//  Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function average(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOdd() {
  const array = [];
  for (let i = 1; i <= 50; i += 2) {
    array.push(i);
  }
  return array;
}

// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, y) {
  var counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      counter++;
    }
  }
  return counter;
}

//  Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function square(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const newArray = [];
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  newArray.push(max, min, avg);
  return newArray;
}
// console.log(maxMinAvg([1, 5, 10, -2]));
// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValue(arr) {
  const last = arr.pop();
  const first = arr.shift();
  arr.unshift(last);
  arr.push(first);
  return arr;
}

//  Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function NumberToString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
console.log(NumberToString([-1, -1, -3, 1]));

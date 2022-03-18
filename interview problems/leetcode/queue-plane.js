// Description

// There are n people standing in a queue, and they numbered from 0 to n - 1 in left to right order.
// You are given an array heights of distinct integers where heights[i] represents the height of the ith person.

// A person can see another person to their right in the queue
// if everybody in between is shorter than both of them.
// More formally, the ith person can see the jth person
// if i < j and min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]).

// Return an array answer of length n where answer[i] is the number of people the ith
// person can see to their right in the queue.

// Input: heights = [10,6,8,5,11,9]
// Output: [3,1,2,1,1,0]
// Explanation:
// Person 0 can see person 1, 2, and 4.
// Person 1 can see person 2.
// Person 2 can see person 3 and 4.
// Person 3 can see person 4.
// Person 4 can see person 5.
// Person 5 can see no one since nobody is to the right of them.
// Example 2:

// Input: heights = [5,1,2,3,10]
// Output: [4,1,1,1,0]

// Constraints:

// n == heights.length
// 1 <= n <= 105
// 1 <= heights[i] <= 105
// All the values of heights are unique.

/* Similar Questions
     1.Buildings With an Ocean View - Medium
     2. Sum of Subarray Ranges - Medium
*/
//
//
// Hint 1: How to solve this problem in quadratic complexity ?
// Hint 2: For every subarray start at index i, keep finding new maximum values until a value larger than arr[i] is found.
// Hint 3: Since the limits are high, you need a linear solution.
// Hint 4: Use a stack to keep the values of the array sorted as you iterate the array from the end to the start.
// Hint 5: Keep popping from the stack the elements in sorted order until a value larger than arr[i] is found, these are the ones that person i can see.

var canSeePersonsCount = function (heights = [1, 5, 4, 3, 7]) {
  personsViewed = new Array(heights.length);
  personsInView = [];
  finalResult = new Array(heights.length);
  maximumHeight = 0;
  // if value to right is greater than value on the left pause there
  for (let i = 0; i < heights.length; i++) {
    if (i == heights.length - 1) break;
    for (let j = i + 1; j < heights.length; j++) {
      if (j == i + 1) {
        personsInView.push(heights[j]);
        maximumHeight = heights[j];
        if (heights[j] > heights[i]) {
          break;
        }
        continue;
      }

      if (heights[j] > maximumHeight) {
        personsInView.push(heights[j]);
        maximumHeight = heights[j];
      }
    }
    personsViewed[i] = [...personsInView];
    personsInView = [];
    maximumHeight = 0;
  }

  for (let x = 0; x < personsViewed.length; x++) {
    if (personsViewed[x] === undefined) {
      finalResult[x] = 0;
      continue;
    }
    finalResult[x] = personsViewed[x].length;
  }

  return finalResult;

  // look for all maximum values after first value on the right by comparism

  // count the values and compare each with the initial value

  // compare value on the right to next value on the right and pick the maximum
  // increment count

  // also compaare this value to the first value if it is greater than the first value end there and increment count

  // if we reach the last index end the application
};

console.log(canSeePersonsCount());
// console.log(239537672423884969653287101 % 2);

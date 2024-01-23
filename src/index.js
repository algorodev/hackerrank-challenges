const { solveMeFirst } = require('./algorithms/solve-me-first/solve-me-first')
const { simpleArraySum } = require('./algorithms/simple-array-sum/simple-array-sum')
const { compareTheTriplets } = require('./algorithms/compare-the-triplets/compare-the-triplets')
const { aVeryBigSum } = require('./algorithms/a-very-big-sum/a-very-big-sum')

console.log(`The sum of 2 and 5 is: ${solveMeFirst(2, 5)}`)
console.log(`The sum of [1, 4, 7, 9] is: ${simpleArraySum([1, 4, 7, 9])}`)
console.log(`Result of comparing [17, 28, 30] and [99, 16, 8] is: ${compareTheTriplets([17, 28, 30], [99, 16, 8])}`)
console.log(`The sum of [1000000001, 2000000002, 3000000003, 4000000004] is: ${aVeryBigSum([1000000001, 2000000002, 3000000003, 4000000004])}`)

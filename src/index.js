const { solveMeFirst } = require('./algorithms/solve-me-first/solve-me-first')
const { simpleArraySum } = require('./algorithms/simple-array-sum/simple-array-sum')
const { compareTheTriplets } = require('./algorithms/compare-the-triplets/compare-the-triplets')
const { aVeryBigSum } = require('./algorithms/a-very-big-sum/a-very-big-sum')
const { diagonalDifference } = require('./algorithms/diagonal-difference/diagonal-difference')
const { plusMinus } = require('./algorithms/plus-minus/plus-minus')
const { staircase } = require('./algorithms/staircase/staircase')
const { miniMaxSum } = require('./algorithms/mini-max-sum/mini-max-sum')
const { birthdayCakeCandles } = require('./algorithms/birthday-cake-candles/birthday-cake-candles')

console.log('Solve Me First Challenge')
console.log('------------------------')
console.log(`The sum of 2 and 5 is: ${solveMeFirst(2, 5)}\n`)
console.log('Simple Array Sum Challenge')
console.log('--------------------------')
console.log(`The sum of [1, 4, 7, 9] is: ${simpleArraySum([1, 4, 7, 9])}\n`)
console.log('Compare The Triplets')
console.log('--------------------')
console.log(`Result of comparing [17, 28, 30] and [99, 16, 8] is: ${compareTheTriplets([17, 28, 30], [99, 16, 8])}\n`)
console.log('A Very Big Sum Challenge')
console.log('------------------------')
console.log(`The sum of [1000000001, 2000000002, 3000000003, 4000000004] is: ${aVeryBigSum([1000000001, 2000000002, 3000000003, 4000000004])}\n`)
console.log('Diagonal Difference Challenge')
console.log('-----------------------------')
console.log(`The diagonal difference of [[1, 4, 6], [2, 5, 8], [5, 8, 9]] is: ${diagonalDifference([[1, 4, 6], [2, 5, 8], [5, 8, 9]])}\n`)
console.log('Plus Minus Challenge')
console.log('--------------------')
console.log('Input: [-4, 3, -9, 0, 4, 1]')
plusMinus([-4, 3, -9, 0, 4, 1])
console.log('\n')
console.log('Staircase Challenge')
console.log('-------------------')
console.log('Input: 4')
staircase(4)
console.log('\n')
console.log('Mini-Max Sum Challenge')
console.log('----------------------')
console.log('Input: [1, 2, 3, 4, 5]')
miniMaxSum([1, 2, 3, 4, 5])
console.log('Birthday Cake Candles')
console.log('---------------------')
console.log(`The tallest numbers count of [4, 4, 3, 1, 2, 4] is: ${birthdayCakeCandles([4, 4, 3, 1, 2, 4])}\n`)

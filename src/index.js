const { solveMeFirst } = require('./algorithms/solve-me-first/solve-me-first')
const { simpleArraySum } = require('./algorithms/simple-array-sum/simple-array-sum')

console.log(`The sum of 2 and 5 is: ${solveMeFirst(2, 5)}`)
console.log(`The sum of [1, 4, 7, 9] is: ${simpleArraySum([1, 4, 7, 9])}`)

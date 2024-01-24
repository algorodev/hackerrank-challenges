const plusMinus = (arr) => {
	let positiveCount = 0, negativeCount = 0, zeroCount = 0

	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === 0) zeroCount++
		else if (arr[i] < 0) negativeCount++
		else if (arr[i] > 0) positiveCount++
	}

	console.log(positiveCount / arr.length)
	console.log(negativeCount / arr.length)
	console.log(zeroCount / arr.length)
}

module.exports = { plusMinus }

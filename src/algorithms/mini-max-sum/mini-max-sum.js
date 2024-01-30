const miniMaxSum = (arr) => {
	let minSum = 0
	let maxSum = 0

	arr = arr.sort((a, b) => a - b)

	for (let i = 0; i < arr.length - 1; i++) {
		minSum += arr[i]
	}
	for (let i = 1; i < arr.length; i++) {
		maxSum += arr[i]
	}

	console.log(minSum, maxSum)
}

export default miniMaxSum

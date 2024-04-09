const diagonalDifference = (arr) => {
	let sumDiagonal1 = 0, sumDiagonal2 = 0, arrLength = arr.length

	for (let i = 0; i < arrLength; i++) {
		sumDiagonal1 += arr[i][i]
		sumDiagonal2 += arr[i][arrLength - i - 1]
	}

	return Math.abs(sumDiagonal2 - sumDiagonal1)
}

export default diagonalDifference

const birthdayCakeCandles = (arr) => {
	let maxNumber = 0
	let maxCount = 0

	for (const element of arr) {
		if (maxNumber < element) {
			maxNumber = element
			maxCount = 0
		}
		if (maxNumber === element) maxCount++
	}

	return maxCount
}

const { aVeryBigSum } = require('./a-very-big-sum')

describe('Simple Array Sum Challenge', () => {
	it('should return the sum of an array of positive integers', () => {
		const result = aVeryBigSum([1000000001, 2000000002, 3000000003, 4000000004])
		expect(result).toBe(10000000010)
	})

	it('should return the sum of an array of negative integers', () => {
		const result = aVeryBigSum([-1000000001, -2000000002, -3000000003, -4000000004])
		expect(result).toBe(-10000000010)
	})

	it('should return zero when the array is empty', () => {
		const result = aVeryBigSum([])
		expect(result).toBe(0)
	})
})

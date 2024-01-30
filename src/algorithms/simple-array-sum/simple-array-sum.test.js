import simpleArraySum from './simple-array-sum.js'

describe('Simple Array Sum Challenge', () => {
	it('should return the sum of an array of positive integers', () => {
		const result = simpleArraySum([1, 2, 3, 9, 5, 4])
		expect(result).toBe(24)
	})

	it('should return the sum of an array of negative integers', () => {
		const result = simpleArraySum([-1, -2, -3, -9, -5, -4])
		expect(result).toBe(-24)
	})

	it('should return zero when the array is empty', () => {
		const result = simpleArraySum([])
		expect(result).toBe(0)
	})
})

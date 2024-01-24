const { diagonalDifference } = require('./diagonal-difference')

describe('Diagonal Difference Challenge', () => {
	it('should calculate the diagonal difference of a square matrix with positive numbers', () => {
		const result = diagonalDifference([[1, 5, 8], [4, 7, 1], [9, 5, 3]])
		expect(result).toBe(13)
	})
})

const { solveMeFirst } = require('./solve-me-first')
describe('Solve Me First Challenge', () => {
	it('should return the sum of two positive integers', () => {
		const result = solveMeFirst(3, 5)
		expect(result).toBe(8)
	})

	it('should return the sum of two negative integers', () => {
		const result = solveMeFirst(-3, -5)
		expect(result).toBe(-8)
	})

	it('should return the sum of one positive integer and one negative integer', () => {
		const result = solveMeFirst(3, -5)
		expect(result).toBe(-2)
	})
})

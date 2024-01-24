const { plusMinus } = require('./plus-minus')

describe('Plus Minus Challenge', () => {
	it('should calculate the ratio of positive, negative, and zero values in an array of integers', () => {
		const log = jest.spyOn(console, 'log').mockImplementation(() => {});

		plusMinus([1, -3, 6, 7, 0, -1, 4])

		expect(log).toHaveBeenNthCalledWith(1, 0.5714285714285714)
		expect(log).toHaveBeenNthCalledWith(2, 0.2857142857142857)
		expect(log).toHaveBeenNthCalledWith(3, 0.14285714285714285)
	})
})

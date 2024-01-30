import miniMaxSum from './mini-max-sum.js'

describe('Mini-Max Sum Challenge', () => {
	it('should return the minimum and maximum sum of an array of integers when given an array of positive integers', () => {
		const log = jest.spyOn(console, 'log').mockImplementation(() => {});

		miniMaxSum([1, 2, 3, 4, 5])
		expect(log).toHaveBeenCalledWith(10, 14)
	})
})

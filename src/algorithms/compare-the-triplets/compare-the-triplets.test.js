const { compareTheTriplets } = require('./compare-the-triplets')
describe('Compare The Triplets', () => {
	it('should return the expected score', () => {
		const result = compareTheTriplets([13, 60, 50], [60, 50, 60])
		expect(result).toStrictEqual([1, 2])
	})
})

import compareTheTriplets from './compare-the-triplets.js'

describe('Compare The Triplets Challenge', () => {
	it('should return the expected score', () => {
		const result = compareTheTriplets([13, 60, 50], [60, 50, 60])
		expect(result).toStrictEqual([1, 2])
	})
})

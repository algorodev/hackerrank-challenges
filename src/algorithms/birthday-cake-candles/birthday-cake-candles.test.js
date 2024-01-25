const { birthdayCakeCandles } = require('./birthday-cake-candles')

describe('Birthday Cake Candles Challenge', () => {
	it('should return the tallest candle count when receiving positive numbers', () => {
		const result = birthdayCakeCandles([4, 4, 6, 3, 2, 6, 8])
		expect(result).toBe(1)
	})
})

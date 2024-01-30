import timeConversion from './time-conversion.js'

describe('Time Conversion Challenge', () => {
	it('should return the expected hour in 24-hour when given a AM 12-hour time', () => {
		const result = timeConversion('08:00:00AM')
		expect(result).toBe('08:00:00')
	})

	it('should return the expected hour in 24-hour when given a AM 12-hour time', () => {
		const result = timeConversion('08:00:00PM')
		expect(result).toBe('20:00:00')
	})
})

const { staircase } = require('./staircase')

describe('Staircase Challenge', () => {
	it('should print a staircase of "#" symbols with spaces in front of each line', () => {
		const log = jest.spyOn(console, 'log').mockImplementation(() => {
		})

		staircase(5)

		expect(log).toHaveBeenCalledWith('    #')
		expect(log).toHaveBeenCalledWith('   ##')
		expect(log).toHaveBeenCalledWith('  ###')
		expect(log).toHaveBeenCalledWith(' ####')
		expect(log).toHaveBeenCalledWith('#####')
	})
})

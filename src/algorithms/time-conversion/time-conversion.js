const timeConversion = (s) => {
	let period = s.substring(8, 10)
	let hour = +s.substring(0, 2)
	let time = ''

	if (period === 'AM') {
		time = hour === 12 ? "00" + s.substring(2,8) : s.substring(0,8)
	}
	if (period === 'PM') {
		time = hour === 12 ? s.substring(0,8) : (hour + 12) + s.substring(2,8)
	}

	return time
}

module.exports = { timeConversion }

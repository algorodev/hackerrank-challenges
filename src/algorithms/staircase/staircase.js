const staircase = (n) => {
	let space = ' '
	let symbol = '#'

	for (let i = 1; i <= n; i++) {
		console.log(space.repeat(n - i) + symbol.repeat(i))
	}
}

export default staircase

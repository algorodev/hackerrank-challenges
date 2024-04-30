const beautifulDays = (i, j, k) => {
  let count = 0

  for (let day = i; day <= j; day++) {
    const reversedDay = parseInt(day.toString().split('').reverse().join(''))
    if (Math.abs(day - reversedDay) % k === 0) {
      count++
    }
  }

  return count
}

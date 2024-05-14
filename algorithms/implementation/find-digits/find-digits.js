const findDigits = (n) => {
  let count = 0
  const digits = n.toString().split('')

  digits.forEach((digit) => {
    if (n % parseInt(digit) === 0) count++
  })

  return count
}

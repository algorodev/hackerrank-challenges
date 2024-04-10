const getTotalX = (a, b) => {
  let result = 0

  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (a.every(x => i % x === 0) && b.every(x => x % i === 0)) {
      result++
    }
  }

  return result
}

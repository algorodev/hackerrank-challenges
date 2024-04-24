const pickingNumbers = (a) => {
  const sorted = a.sort((a, b) => a - b)
  let max = 0

  for (let i = 0; i < sorted.length; i++) {
    let count = 0
    for (let j = i; j < sorted.length; j++) {
      if (Math.abs(sorted[i] - sorted[j]) <= 1) {
        count++
      }
    }
    if (count > max) {
      max = count
    }
  }

  return max
}

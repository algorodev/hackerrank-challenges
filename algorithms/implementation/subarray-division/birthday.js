const birthday = (s, d, m) => {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    let sum = 0
    for (let j = 0; j < m; j++) {
      console.log(i + j, s[i + j])
      sum += s[i + j]
    }

    if (sum === d) {
      count++
    }
  }

  return count
}
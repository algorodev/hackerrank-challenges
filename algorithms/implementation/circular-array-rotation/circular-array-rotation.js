const circularArrayRotation = (a, k, queries) => {
  const n = a.length
  const result = []

  for (const element of queries) {
    result.push(a[(n - (k % n) + element) % n])
  }

  return result
}

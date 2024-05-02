const dynamicArray = (n, queries) => {
  const seqList = Array.from({ length: n }, () => [])
  let lastAnswer = 0
  let result = []

  for (const element of queries) {
    const [type, x, y] = element
    const index = (x ^ lastAnswer) % n

    if (type === 1) {
      seqList[index].push(y)
    } else {
      lastAnswer = seqList[index][y % seqList[index].length]
      result.push(lastAnswer)
    }
  }

  return result
}

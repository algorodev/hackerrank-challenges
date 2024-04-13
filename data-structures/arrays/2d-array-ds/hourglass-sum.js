const hourglassSum = (arr) => {
  let maxHourglassSum = Number.NEGATIVE_INFINITY

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
      const middle = arr[i + 1][j + 1]
      const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      const hourglassSum = top + middle + bottom

      maxHourglassSum = Math.max(maxHourglassSum, hourglassSum)
    }
  }

  return maxHourglassSum
}

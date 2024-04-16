const getMoneySpent = (keyboards, drives, b) => {
  let maxSum = -1

  keyboards.forEach(keyboard => {
    drives.forEach(drive => {
      const sum = keyboard + drive

      if (sum <= b && sum > maxSum) maxSum = sum
    })
  })

  return maxSum
}

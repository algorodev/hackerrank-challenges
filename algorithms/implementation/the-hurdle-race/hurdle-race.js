const hurdleRace = (k, height) => {
  const maxHeight = Math.max(...height)
  return maxHeight > k ? maxHeight - k : 0
}

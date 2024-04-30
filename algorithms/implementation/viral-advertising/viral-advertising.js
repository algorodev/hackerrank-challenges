const viralAdvertising = (n) => {
  let cumulative = 0
  let shared = 5

  for (let i = 0; i < n; i++) {
    const liked = Math.floor(shared / 2)
    cumulative += liked
    shared = liked * 3
  }

  return cumulative
}

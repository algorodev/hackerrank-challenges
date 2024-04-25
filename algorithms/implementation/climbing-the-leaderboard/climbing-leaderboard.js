const climbingLeaderboard = (ranked, player) => {
  const sortedRanked = ranked.sort((a, b) => b - a)
  const uniqueRanked = [...new Set(sortedRanked)]
  const result = []
  let j = uniqueRanked.length - 1

  for (let i = 0; i < player.length; i++) {
    while (player[i] >= uniqueRanked[j]) {
      j--
    }

    result.push(j + 2)
  }

  return result
}

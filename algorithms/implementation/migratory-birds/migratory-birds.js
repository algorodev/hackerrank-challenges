const migratoryBirds = (arr) => {
  const birds = {}
  let maxCount = 0
  let id = 0

  arr.forEach((bird) => {
    if (birds[bird]) {
      birds[bird]++
    } else {
      birds[bird] = 1
    }
  })

  for (const bird in birds) {
    if (birds[bird] > maxCount) {
      maxCount = birds[bird]
      id = bird
    }
  }

  return id
}

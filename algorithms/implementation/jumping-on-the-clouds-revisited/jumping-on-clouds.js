const jumpingOnClouds = (c, k) => {
  let energy = 100
  let move = 0

  do {
    move = (move + k) % c.length
    energy -= c[move] === 1 ? 3 : 1
  } while (move !== 0)

  return energy
}

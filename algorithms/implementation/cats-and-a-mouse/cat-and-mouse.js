const catAndMouse = (x, y, z) => {
  let result = 'Mouse C'
  const distanceCatA = Math.abs(x - z)
  const distanceCatB = Math.abs(y - z)

  if (distanceCatA < distanceCatB) {
    result = 'Cat A'
  } else if (distanceCatB < distanceCatA) {
    result = 'Cat B'
  }

  return result
}

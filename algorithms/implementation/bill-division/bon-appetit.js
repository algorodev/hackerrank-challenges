const bonAppetit = (bill, k, b) => {
  const totalAmount = bill.reduce((acc, current) => acc + current, 0)
  const annaAmount = (totalAmount - bill[k]) / 2
  const brianAmount = totalAmount / 2

  if (annaAmount === b) console.log('Bon Appetit')
  else console.log(brianAmount - annaAmount)
}

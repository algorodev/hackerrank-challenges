const sockMerchant = (n, ar) => {
  const socks = ar.reduce((acc, sock) => {
    acc[sock] = acc[sock] ? acc[sock] + 1 : 1
    return acc
  }, {})

  return Object.values(socks).reduce((acc, count) => {
    acc += Math.floor(count / 2)
    return acc
  }, 0)
}

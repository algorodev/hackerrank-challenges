const pageCount = (n, p) => {
  const fromStartPages = Math.floor(p / 2)
  const fromEndPages = Math.floor(n / 2) - fromStartPages

  return Math.min(fromStartPages, fromEndPages)
}

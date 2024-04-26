const designerPdfViewer = (h, word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const maxHeight = word.split('').reduce((max, char) => {
    const index = alphabet.indexOf(char)
    return h[index] > max ? h[index] : max
  }, 0)

  return maxHeight * word.length
}

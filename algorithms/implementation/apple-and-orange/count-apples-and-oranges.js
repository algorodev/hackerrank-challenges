const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const applesOnHouse = apples.filter(apple => a + apple >= s && a + apple <= t).length
  const orangesOnHouse = oranges.filter(orange => b + orange >= s && b + orange <= t).length

  console.log(applesOnHouse)
  console.log(orangesOnHouse)
}

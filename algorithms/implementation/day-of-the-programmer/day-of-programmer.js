/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */
const dayOfProgrammer = (year) => {
  const month = [31, 31, 30, 31, 30, 31, 31]
  let febDays = 28
  let totalDays = 0

  if (year >= 1919) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      febDays = 29
    }
  } else {
    if (year % 4 === 0) {
      febDays = 29
    }
  }

  if (year === 1918) {
    febDays = 15
  }

  totalDays = month.reduce((acc, curr) => acc + curr, 0) + febDays

  return `${256 - totalDays}.09.${year}`
}

console.log(dayOfProgrammer(1918))

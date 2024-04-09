const gradingStudents = (grades) => {
  return grades.map((grade) => {
    const nextMultipleOfFive = Math.ceil(grade / 5) * 5

    return nextMultipleOfFive - grade < 3 && grade >= 38 ? nextMultipleOfFive : grade
  })
}

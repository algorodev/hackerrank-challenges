const angryProfessor = (k, a) => {
  const onTimeStudents = a.filter(student => student <= 0).length

  return onTimeStudents >= k ? 'NO' : 'YES'
}

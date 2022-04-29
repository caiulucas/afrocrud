const employees = ['Lucas Caio', 'Kaio Lucas', 'Antonella'];

const newEmployees = employees.map(employee => {
  if(employee === 'Kaio Lucas') {
    return 'Caio Lucas'
  }
  
  return employee
})

console.log(employees)
console.log(newEmployees)
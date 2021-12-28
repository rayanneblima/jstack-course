/* 
  ## Destructuring
*/

const user = {
  firstName: 'Rayanne',
  lastname: 'Lima',
  full_name: 'Rayanne Bertolace Lima',
  age: 24,
  github: '/rayanneblima',
  skills: ['Front-End', 'Back-End', 'Mobile', 'UI/UX']
}

// const firstName = user.firstName
// const age = user.age
// const skills = user.skills

const { firstName, full_name: fullName, age, skills } = user

console.log(firstName, "|", fullName, "|", age);

const [firstSkill, secondSkill] = skills

console.log(firstSkill, "|", secondSkill);
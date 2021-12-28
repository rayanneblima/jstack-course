/* 
  ## Spread
*/

const user = {
  firstName: 'Rayanne',
  lastname: 'Lima',
  age: 24,
  github: '/rayanneblima',
  skills: ['Front-End', 'Back-End', 'Mobile'],
  active: false
}

// user.active = true
// Object.assign(user, { active: true })

// Immutable Principle
// const updatedUser = {
//   firstName: user.firstName,
//   lastName: user.lastName,
//   age: user.age,
//   github: user.github,
//   skills: user.skills,
//   active: true
// }

const updatedUser = {
  ...user,
  skills: [...user.skills, 'UI/UX'],
  active: true
}
/* 
  ## Rest
*/

const user = {
  firstName: 'Rayanne',
  lastname: 'Lima',
  age: 24,
  github: '/rayanneblima',
  skills: ['Front-End', 'Back-End', 'Mobile', 'UI/UX']
}

const { firstName, skills, ...restProperties } = user

const [firstSkill, ...restSkills] = skills

console.log(firstName, "|", restProperties, "|", firstSkill, "|", restSkills);
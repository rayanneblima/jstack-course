/* 
  ## Helpers
*/

const tech = 'Node.js'
const array = ['Node.js', 'Vue.js', 'React']

const includes = tech.includes('.') // case sensitive
const arrayIncludes = array.includes('Vue.js') // search for exact value 

const startsWith = tech.startsWith('N')
const endsWith = tech.endsWith('js');

console.log({ includes, arrayIncludes, startsWith, endsWith });
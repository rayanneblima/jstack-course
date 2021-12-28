/* 
  ## Higher Order Functions
*/

const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

// .find -> on true, returns the value of the first element
const find = array.find((product) => product.price > 1000)

// .findIndex -> on true, returns the index of the first element
const findIndex = array.findIndex((product) => product.price > 1000)

// .some -> boolean
const some = array.some((product) => product.price > 1000)

// .every -> boolean
const every = array.every((product) => product.price >= 1000)

// console.log({ find, findIndex, some, every })

// -------------------------------------------------------------------

// .map -> clone original array and modify its elements using a callback function
const map = array.map((product) => product.name === 'iPhone' ? { ...product, name: 'iPhone Pro' } : product)
const mapAlternative = array.map((product) => ({ ...product, subtotal: product.price * product.quantity }))

// .filter -> new array with filtered elements
const filter = array.filter((product) => product.price > 1000)

// .reduce -> returns a single value (accumulated result)
const reduce = array.reduce((accumulator, product) => {
  return product.price > 1000 ? accumulator + (product.price * product.quantity) : accumulator
}, 0)

console.log({ map, mapAlternative, filter, reduce })

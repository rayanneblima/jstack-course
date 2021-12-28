function sayHello (name) {
  console.log(`Hello, ${name}!`)
}

// export default sayHello; -> 1º and 2º
export { sayHello }; // -> 3º

const userName = 'Rayanne'
export default userName
/* 
  ## Function x Arrow Function
*/

function myFunction () {
  // new myFunction() -> constructor -> change a function to object
  // this -> myFunction context
  this.name = "Rayanne"

  const myArrowFunction = () => {
    // cannot be used as a constructor
    // this -> myFunction context
    this.age = 24
  }

  myArrowFunction()
}

const myArrowFunction = () => {
  // cannot be used as a constructor
  // this -> node context
  this.name = "Rayanne"
}

/* 
  ## Arguments
*/

function showArguments () {
  console.log(Object.values(arguments))
}

// showArguments(1, 2, 3, 4, 'Rayanne')

function showArgumentsByRestOperator (firstParam, ...args) {
  console.log(firstParam)
  console.log(Object.values(args))
}

// showArgumentsByRestOperator(1, 2, 'Rayanne')

const showArgumentsInArrowFunction = () => {
  // this x arguments -> inherit the same context
  console.log(Object.values(arguments))
}

// showArgumentsInArrowFunction(1, 2)
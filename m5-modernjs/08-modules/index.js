// import sayHello from './sayHello.mjs' -> 1º) change file extension
// import sayHello from './sayHello.js'  -> or 2º) package.json { 'type': 'module' }
import userName, { sayHello as say } from './sayHello.js'  // or 3º) change export in sayHello.js

say(userName)
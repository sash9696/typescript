const {getName}  = require('./functions')

// /npx tsc functions.ts  
//compiles the ts file and coverts
//it into js

console.log(getName({
    first: 'a',
    last: 'b'
}))
console.log(getName())
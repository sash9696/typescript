//specifying types
//cmd k cmd i gives the type
let username: string = 'Sahil'
let isLoggedIn: boolean  = true

username += ' Chopra'

console.log(username)
let myNumber:number = 10

let myRegex:RegExp =  /foo/

//typing arrays
const names: string[] = username.split(" ") //one way arrays

// const values: Array<number> = ['a','b'] //error
const values: Array<number> = [10,20,30,40] //second way array of numbers

//Typing Objects

//for defining a type once and then resuse it we use interface
//and then when we make changes to it it makes changes everywhere

//for ex

interface Person {
    first:string,
    last:string
}

let myPerson = {
    first: 'Sahil',
    last: 'Chopra'
}

//lets take map as example
const ids : Record<number,string> = {
    10: 'a',
    20: 'b',
}
// ids[30] = 'c' //error Property '30' does not exist on type
//beause 10,20 are type of strings
//to solve this we can use record where both key and value type
//can be defined

//How ts works with conditionals

// if (ids[30] == 'D'){

// }
// if (ids[30] == 20){ //gices error
    
// }

//loops
//most of the time ts will make types infeered based on 
//the input

let array = [1,2,3]
array.forEach(v => console.log(v))

let out = array.map(v => v*10)
//inferred by ts and gave out as num

let out2 = array.map(v => `${v*10}`)
//inferred by ts and gave out as string

// let out3:number = array.map(v => `${v*10}`)
//inferred by ts and gave out as string
//gives error as out expected is number

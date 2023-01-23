//what is any type?
//any type is something
//that we avoid when it comes to 
//typescript 
//typing parameters

function addNum(a:number, b:number):number{ //return type of a function goes after the paranthesis
    return a + b
}
export default addNum

// export const addStrings = (string1:string, string2:string):string => `${string1}${string2}`

//default params
export const addStrings = (string1:string, string2:string = ""):string => `${string1}${string2}`

//union types

export const format = (title:string, param:string | number):string => `${title}${param}`

//function that doesn't return anything

export const printFormat = (title:string, param:string | number):void => {
    console.log(format(title,param))
}

//returns a promise?
// export const fetchData = (url:string):Promise<string> => Promise.resolve(`data from${url}`)

//...rest parameters

function introduce(salutation:string, ...names:string[]):string {
    return (`${salutation}${names.join(" ")}`)
}

//misconception

//typescript only enforces types
//at compile time and not at run time

export function getName(user:{first:string, last:string}):string{

    return (`${user?.first ?? 'first'}${user?.last ?? 'last'}`)

}
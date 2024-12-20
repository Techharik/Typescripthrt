const x: number = 2;
console.log(x)

// how to give an types to arguments of a functions:
// string , number , any , boolean, null , undefined.




function greet(fname: string, lname: string) {
    return "Hello welcome " + fname + " " + lname
}

greet('Hari', 'prasath');



//return value should be a number

function sum(x: number, y: number): string {
    let e = x + y
    return String(e)
}

sum(2, 3);

//typescript has the type inference by predicting

function age(x: number): boolean {

    if (x >= 18) {
        return true
    } else {
        return false
    }
}

age(65);

//callback function; - How to give to the types

// function in a aruguments ()=> returntype

function first(callback: () => string) {
    setTimeout(callback, 1000)
}

function sencond() {
    return 'Hi, ther'
}

first(sencond);


// assign the types for the Interfaces.
interface User {
    firstname: string,
    lastname: string,
    age: number,
    email?: string //optional adding
}

function ages(x: User): boolean {

    if (x.age >= 18) {
        return true
    } else {
        return false
    }
}

ages({
    firstname: 'Hari',
    lastname: 'prasath',
    age: 20
});



// difference between the interfaces and types.

//syntax


interface users {
    name: string,
    age: number,
    call?: string | number
    greet: (name: string) => string
}

//we can implement this in the class 

class EmployeeUser implements users {
    name: string
    age: number
    call: number
    constructor(name: string, age: number, call: number) {
        this.name = name,
            this.age = age
        this.call = call
    }

    greet(name: string) {
        return 'Hello welcome' + name
    }

}

//types do little extras not implemente din class you can see a = in sytax

type user2 = {
    name: string,
    age: number
}

// unions.

let namess: string | number = 'hi';
// or 
type nameoffuntion = string | number;

let namesss: nameoffuntion = 'hi';


//intersections = & combination of both types.
//enums in ts

enum moveMent {
    Up, //default value is 0  - you can assign one value as number example 10 , other follow inc of 1 , or string 
    down,
    left,
    right,
}

//generics in ts 

//defaining an array

const c: Array<string> = ['lk'] //or
const cb: string[] = ['s']


//if it is a mixed array  - string , number , boolean

const cbf: (string | number | boolean)[] = ['sa', 2, true]
//or - use types

type typecbf = (string | number | boolean)

const cbf1: typecbf[] = ['s']

//generics - can be anything

function create<T>(a: T[]): T {
    return a;
}

const created1 = create<string>(['a']);

// created1.toLocaleLowerCase()
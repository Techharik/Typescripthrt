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
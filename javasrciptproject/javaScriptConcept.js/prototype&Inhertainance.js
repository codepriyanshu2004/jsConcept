



//  prototype

// The JavaScript prototype property also allows you to add new methods to objects constructors:
// /All JavaScript objects inherit properties and methods from a prototype:

// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// The JavaScript prototype property allows you to add new properties to object

let myheroes = ["thor","spiderman"]
let dcHeroes = ["flask" , "Batman"]

let heroPowers= {
    thor:"hammer",
    spiderman:"sling",

    getSidermanpower: function (){
        console.log(`sidy power is  ${this.spiderman}`)
    }

}

// js mai har chiz object hain array string har chiz isliye myheroes se object of access kr paa rahe hain
// or object se bi object of access kr pa raha hain ex heropower

Object.prototype.hitesh = function(){                   
    console.log("Hitesh is present in all object")   
}
console.log(myheroes.hitesh())
console.log(heroPowers.hitesh())

Array.prototype.heyhitesh = function(){
    console.log("hitesh say hii")
}
console.log(myheroes.heyhitesh())
// console.log(heroPowers.heyhitesh())    aye wala galat hoga kyu ki object se array acces nhi kr sakte



// Inheritance

const user = {
    name :"priyanshu",
    email:"priyanshubitturajs@gmail.com"
}

const teacher = {
    makevidoes: true
}
const teachingSupoort ={
    isAvailable : false,

    // __proto__:teacher  old way
}

// console.log(teachingSupoort.makevidoes)
// Object.setPrototypeOf (teacher ,teachingSupoort) new way
console.log(teacher.isAvailable)

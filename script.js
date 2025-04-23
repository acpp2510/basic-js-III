//1.
function sum (num1, num2) {
    return console.log(num1 + num2)
}
sum(1,1)
//2.
function rest (num1, num2) {
    return console.log(num1 - num2)
}
rest(10,5)
//3.
function mult (num1, num2) {
    return console.log(num1 * num2)
}
mult(2,4)
//4.
function div (num1, num2) {
    return console.log(num1 / num2)
}
div(4,2)
//5.
function exp (num1, num2) {
    return console.log(num1 ** num2)
}
exp(4,3)
//6.
function resto (num1, num2) {
    return console.log(num1 % num2)
}
resto(10,4)
//7.
function raiz (num) {
    return console.log(num ** 0.5)
}
raiz(9)
//8.
function absolute (num) {
    return console.log(Math.abs(num))
}
absolute(-10)
//9.
function round (num) {
    return console.log(Math.round(num))
}
round(4.9)
//10.
function random () {
    return console.log(Math.random(0,1))
}
random()
random()

//LETRAS

//1.
function concat (str1, str2){
    return console.log(str1 + str2)
}
concat("Hola","Caracola")
//2.
function length (str) {
    return console.log(str.length)
}
length("Caracola")
//3.
function upper (str) {
    return console.log(str.toUpperCase())
}
upper("caracola")
//4.
function lower (str) {
    return console.log(str.toLowerCase())
}
lower("CARACOLA")
//5.
function char (str, num) {
    return console.log(str.charAt(num))
}
char("Caracola", 0)
//6.
function reverse (str) {
    return console.log(str.split("").reverse().join(""))
}
reverse("ola")
//7.
function countChar (str1, str2) {
    let count = 0
    for (let i= 0; i < str1.length; i++) {
        if (str1[i] === str2) {
            count++
        }
    }
    return console.log(count)
}
countChar("caracola", "c")
//8.
function blank (str) {
    return console.log(str.split(" ").join(""))
}
blank("   c @  r    c  o l  a   ")
//9.
function palindrome (str) {
    const strReverse = str.split("").reverse().join("")
    return console.log(str === strReverse)
}
palindrome("ana")
//10.
function capitalize (str) {
    let result = ""
    let capNext = true
    for (let i= 0; i < str.length; i++) {
        const actChar = str[i]
        if (actChar === " ") {
            result += " "
            capNext = true
        }else if (capNext) {
            result += actChar.toUpperCase()
            capNext = false
        }else {
            result += actChar.toLowerCase()
            capNext = false
        }
    }
    return console.log(result)
}
capitalize("hola caracola carambola")
//ARRAYS
//1.
function sumArray(elemments) {
    let sum = 0
    for (let i= 0; i < elemments.length; i++) {
    sum = sum + elemments[i]
    }
    return console.log(sum)
}
sumArray([10,3,3,1])
//2. 
function promArray(elements) {
    const sum = elements.reduce((total, element) => total + element, 0)
    const cant = elements.length
    return console.log((sum/cant) || 0)
}
promArray([10,3,3,1]) 
//3.
function sortArray(elements) {
    return console.log(elements.sort((a, b) => a-b))
}
sortArray([10,3,3,1])
//4.
function filtArray(elements, num) {
    return console.log(elements.filter(element => element > num))
}
filtArray([10,3.5,3,1],3)
//5.
function concatArray(array1, array2) {
    return console.log(array1.concat(array2))
}
concatArray([10,3.5,3,1],[3,4])
//6.
function maxArray(elements) {
    return console.log(Math.max(...elements))
}
maxArray([10,3.5,3,1])
//7.
function minArray(elements) {
    return console.log(Math.min(...elements))
}
minArray([10,3.5,3,1])
//8.
function countArray(elements, element) {
    let count = 0
    for (let i= 0; i < elements.length; i++) {
        if (elements[i] === element) {
            count++
        }
    }
    return console.log(count)
}
countArray([10,3,3,1],3)
//9.
function anyduplArray(elements) {
    return console.log([...new Set (elements)])
}
anyduplArray([10,3,3,1])
//10.
function reverseArray(elements) {
    return console.log(elements.reverse())
}
reverseArray([10,3,3,1])
//OBJETOS
//1.
function getName(obj) {
    return console.log(obj.name)
}
getName({name: "Caracola"})
//2.
function updateAge(obj, num) {
    obj.age= num
    return console.log(obj)
}
updateAge({name:"Caracola", age:10},20)
//3.
function addLastname(obj, str) {
    obj[str]= null
    return console.log(obj)
}
addLastname({name:"Caracola"}, "lastname")
//4.
function deleteLastname (obj, str) {
    delete obj[str]
    return console.log(obj)
}
deleteLastname({name:"Caracola", lastname:"Carambola"}, "lastname")
//5.
function countKeys(obj) {
    return console.log(Object.keys(obj).length)
}   
countKeys({name:"Caracola", lastname:"Carambola"})
//6.
function hasKey(obj, str) {
    return console.log(obj.hasOwnProperty(str))
}
hasKey({name:"Caracola", lastname:"Carambola"},"ID")
//7.
function getValues(obj) {
    return console.log(Object.values(obj))
}
getValues({name:"Caracola", lastname:"Carambola"})
//8.
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
        return console.log(false)
    }
    for (let i= 0; i < keys1.length; i++) {
        const key = keys1[i]
        if (obj1[key] !== obj2[key]) {
            return console.log(false)
        }
    }
    return console.log(true)
}
compareObjects({name:"Caracola", lastname:"Carambola"}, {name:"Caracola", lastname:"Carambola"})
//9.
function copyObject(obj) {
    const newObj= {...obj}
    return console.log(newObj)
}
copyObject({name:"Caracola", lastname:"Carambola"})
//10.
function mergeObjects(obj1, obj2) {
    return console.log({...obj1, ...obj2})
}
mergeObjects({name:"Caracola", lastname:"Carambola"}, {age:30, ID:1234})



// Write a function to split a string and convert it into an array of words.
// let str= "I love arrays they are my favorite"
// function stringSplit(str){
//     return str.split(" ")

// }
// let result=stringSplit(str)
// console.log(result)




//Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// ["apple","rottenBanana","apple"]  ["apple","banana","apple"]

// let array =["apple","rottenBanana","apple"]

// const array1=array.map(item => {

// if(item.includes("rotten")){
//  return item=item.slice(6).toLowerCase()
   
// } else{
//      return item=item
// }
 

// })
// console.log(array1)


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
// let array =[5,5,7,"m", ]
// let sum=0;
// let array1=array.forEach(item => {

//     if(typeof item == "number" ){
//         sum +=item
//     }

// })
// console.log(sum)




//**  array **/

// let str ="background-color"

// function camelize(str){
   
    
//     return  str.split("-").map(( item, index) => index ==0 ? item : item[0].toUpperCase()+item.slice(1)).join(" ")


// }
// console.log(camelize(str))


// დაალაგეთ კლებადი თანმიმდევრობით

// let arr = [5, 2, 1, -10, 18, 8];
// let k= arr.sort((a,b) => a-b)
// console.log(k)



// შექმენით ფუნქცია copySorted(arr), რომელიც ასეთ ასლს დააბრუნებს

// let arr = ["HTML", "JavaScript", "CSS"];
// function cop(arr) {
//   return arr.slice().sort();
// }

// console.log(copySorted(arr))



// დაწერეთ ფუნქცია filterRange(arr, a, b), რომელიც იღებს მასივს arr, ეძებს ელემენტებს, რომელთა მნიშვნელობებია -ზე მეტი ან ტოლი aდა -ზე ნაკლები ან ტოლი bდა აბრუნებს შედეგს მასივის სახით.

// ფუნქციამ არ უნდა შეცვალოს მასივი. მან უნდა დააბრუნოს ახალი მასივი.

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b){
    
//     return arr.filter(item =>item  >a && item<b)
//  }
//     console.log(filterRange(arr, 1, 6))


 
// let x=[5,9,4,3,8]    ვიპოვოთ უმცირესი 2 რიცხვის ჯამი
//  function minsum(){
//     let arr=x.sort()
//     return  arr[0]*arr[1]

//  }

//  console.log(minsum())

// let x=[5,9,4,3,8]    // საშუალოს გამოთვლა
// function aversge(){
   
//     let m=x.reduce((prev, cur)=> prev+cur ,0)/x.length
//  return m
// }


//  console.log(aversge())

let arr = [6,1,1,7,8,5,5,2,9]
function index(arr,a,b){
    let indA = arr.indexOf(a)
    let indB = arr.indexOf(b)

    arr[indA]=b
    arr[indB]=a
    return arr


}

console.log(index(arr,1,5))
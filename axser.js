/*ცარიელი მასივის შესაქმნელად ორი სინტაქსი არსებობს:

let arr = new Array();
let arr = [];
*/


// ჩვენ შეგვიძლია ელემენტის ჩანაცვლება:  და დამატება
// // ჩანაცვლება
// let fruits = ["Apple", "Orange", "Plum"];
// fruits[2]="banana"
// console.log(fruits)

// damateba
// let fruits = ["Apple", "Orange", "Plum"];
// fruits[3]="banana"
// console.log(fruits)



// fruits.pop()და fruits.at(-1)აბრუნებს მასივის ბოლო ელემენტს, 
// მაგრამ fruits.pop()ასევე ცვლის მასივს მისი წაშლით.

// let fruits = ["Apple", "Orange", "Pear"];
// fruits.pop()
// console.log(fruits)

// push()
// let fruits = ["Apple", "Orange", "Pear"];
// fruits.push("banana")
// console.log(fruits)

// shift
// let fruits = ["Apple", "Orange", "Pear"];
// fruits.shift()
// console.log(fruits)

// unshift
// let fruits = ["Apple", "Orange", "Pear"];
// fruits.unshift("bana")
// console.log(fruits)

// სიგრძის შეზღუდვა
// let arr=[1,2,3,5,7,8,9]
// arr.length=3
// console.log(arr)


// ცარიელი მასივის სექმნა
// let arr = new Array(2);
// console.log(arr)


// შექმენით მასივი styles„ჯაზი“ და „ბლუზი“ ელემენტებით.
// ბოლოს დაამატეთ „როკ-ენ-როლი“.
// შუაში მოცემული მნიშვნელობა შეცვალეთ „კლასიკურით“. შუა მნიშვნელობის მოსაძებნად თქვენი კოდი უნდა იმუშაოს კენტი სიგრძის ნებისმიერი მასივისთვის.
// მასივიდან პირველი მნიშვნელობა მოაშორეთ და აჩვენეთ.
// მასივში Rapდა Reggae-ს წინა პლანზე დამატება.
// let styles=["Jazz", "Blues"]
// styles.push("Rock-n-Roll")
// styles[1]="Classics"
// styles.shift()
// styles.unshift("Rap","Reggae")
// console.log(styles)


// დაწერეთ ფუნქცია sumInput(), რომელიც:

// მასივის გამოყენებით მომხმარებელს სთხოვს მნიშვნელობებს promptდა ინახავს მათ მასში.
// ასრულებს კითხვას, როდესაც მომხმარებელი შეიყვანს არარიცხვით მნიშვნელობას,
//  ცარიელ სტრიქონს ან დააჭერს „გაუქმებას“.
// ითვლის და აბრუნებს მასივის ელემენტების ჯამს.
// P.S. ნული 0სწორი რიცხვია, გთხოვთ, ნულზე არ შეწყვიტოთ შეყვანა.


// function sumInput() {
//   let arr=[];
//   while(true){
//     let n= prompt("ჩაწერე")
//     if(n === null || n=== "" || isNaN(n)) break;
//     arr.push(Number(n))
    
//   }
//   let sum =0;
//   for(let item of arr){
//     sum += item
//   }
//   return sum

// }
// console.log("jamiii   "+sumInput() )


// /reduce-ით/
// function sumInput() {
//   let arr=[];
//   while(true){
//     let n= prompt("ჩაწერე")
//     if(n === null || n=== "" || isNaN(n)) break;
//     arr.push(Number(n))
    
//   }


// return  arr.reduce((sum, num) => sum + num, 0);

// }
// console.log("jamiii   "+sumInput() )




// ****** array method
// let arr =[1,3,5,8,9,5,7]

// /* delete- შლის ელემენტს, მაგრამ რაოდეობაში რჩება მაინც სიგრძეში*/
// delete arr[2] // წაშლის მე-2 ინდექსზე ელემენტს
// console.log(arr) //[ 1, 3, <1 empty item>, 8, 9, 5, 7 ]


// /* splice

// arr.splice(1,2) //წაშლის 1 ინდექსიდან 2ელემენტს
// console.log(arr)


// arr.splice(0, 2, 55) //წაშლის 0 დან 2 ელემენტს და დაამაებს 55
// console.log(arr) //

// arr.splice(2, 0, 55) // დაამატებს 2 ინდექსზე 55-ს წაშლის გარეშე
// console.log(arr) //




// let arr =[1,3,5,8,9,5,7]
// **** slice

// let m= arr.slice(1,3)
// console.log(m) // ამოჩრის 1 დან 3ინდექსამდე ელემეტნტებს

// let m= arr.slice(-3)
// console.log(m) // ამოჩრის ბოლოდან 3 ელემენტს მოჭრის

//** concate */

// let m=[1,6,8,4]
// let k= [9,8,6]
// let x=k.concat(m)
// console.log(x)



//** indexOf/lastIndexOf და მოიცავს - ძიება მასივში */
// let arr =[1,3,5,8,9,3,5,7,"mari"] 
// let k=arr.indexOf("mari")
// console.log(k) //moZebnis  ინდექს
// let k=arr.indexOf(5)
// console.log(k) //moZebnis  მერამდენე ინდექზეა 5


// let k=arr.includes(5)
// console.log(k) //თუ შეიცავს 5 დაწრს trus, Tu arada Folse

 //** finde- პოვნს */

//  let m= arr.find(item=> 3)
//  console.log(m) // პოულობს მხოლოდ პირველად რომ შეხვება იმას და წერს რაოდნეობას , 1 ,2 3 რამდენიც იპოვა


//   let m= arr.filter(item=> item>2)
//  console.log(m) // ფილტრავას იმას რაც მეტია 2ზე

//** მასივის შეცვლა map */

// let arr =[1,3,5,8,9] 
// let k=arr.map(item => item *2)
// console.log(k)  //2 ze amravlebs yvela wevrs

//** sort- დალაგება */
//  let arr =[8,6,1,3,5,8,9] 
//  arr.sort()
// console.log(arr)




// split dapofa  join SeerTeba
// let str = "test";

// console.log( str.split('') ); // t,e,s,t


// let str = ["t","e","s"]
//  console.log(str.join("")) //tes


// reduce  -ჯამის გამოთვლა
// let arr =[1,2,3] 
// let m=arr.reduce((prev,curent)=> prev+curent ,0)
// console.log(m)


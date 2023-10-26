
// reverse a word
// let sentence = 'Hello world';
// let res =sentence.split('').reverse().join('')
// console.log(res);

// reverse a word same order

// let sentence = 'Hello world';
// function convert(str) {
//   let words = str.split(' ');
//   console.log(words);
//   let reverse = words.map((word)=>(
//     word.split('').reverse().join('')
//   ))
//   console.log(reverse);
//   let result = reverse.join('')
//   return result
// }
// convert(sentence)


// closure in javascript

// function  outer() {
//  const count = 1;
//   function inner() {
//     console.log(count);
//   }
//   return inner
// }
// outer()()


// currying

// function curry (a){
//   return function (b){
//     return function (c){
//       return (a+b+c)
//     }
//   }
// }
// console.log(curry(1)(2)(3));

// infinite curriying

// function infintecurry (a){
//   return function (b){
//       if (b){
//        return infintecurry(a+b)
//       }else{
//         return a
//       }
//   }
// }
// console.log(infintecurry(1)(5)(10)(25)(45)());

// reuseable currying

// function resueable(opertaion) {
//       return function (a) {
//         return function (b) {
//           if (opertaion === 'plus') {
//             return a+b
//           }
//           else if (opertaion === 'minus'){
//               return a - b
//           }
//           else if (opertaion === 'multipley'){
//               return a * b
//           }
//         }
//       }
// }
// console.log(resueable('minus')(20)(50));
// console.log(resueable('plus')(20)(50));

//map in es6

// let number =[1,2,3,4,5]
//  let result= number.map((each)=>{
//    return (
//       each *5
//    )
//  })
//  console.log(result);

// filter in es6

// let number =[1,2,3,4,5]
// let result =number.filter((each)=>{
//   return (
//       each >=3
//   )
// })
// console.log(result);


// reduce in es6

// let number =[1,2,3,4,5,50]
// let result = number.reduce((acc,cur)=>{
//   return (
//       acc+cur
//   )
// })
// console.log(result);


// fucntion declration

// function sum(num) {
//   return  num * num
// }
// console.log(sum(2));

// fucntion expression

//   let expression = function (num) {
//       return num * num
//   }
// console.log(  expression (5));

// first class fucntion

// function sum(num) {
//   return num * num
// }
// function display(fn) {
//   console.log(`now the function has been acted as a varibale and the result is ${fn(5)}`);
// }
// display(sum)

// impure fucnton

// let global =1;
// function incremnt(val) {
//   global+=val
//   console.log(global);
// }
// incremnt(1)
// incremnt(1)

// iife  immidiatly invoked function

//   (  function multiply (num) {
//     console.log(  num * num);
// }(5))

// rest operter 
// is used in fucntion for rest of the agrument

// function rest(a,b,...nums) {
//   console.log(a);
//   console.log(b);
//   console.log(nums);
// }
// rest(1,2,3,4,5,5)


// spread operter

// spraed operter used to spread the value

// let number =[1,2,3,4,5,6]
// function spred(a,b,c,d,e,f) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(e);
//   console.log(f);
// }
// spred(...number)

// callback fucntion
// as simple expalintion we can say Map filter also addeventlisterner
// and this explantion this code is higher order function also

// let number =[1,2,3,4,5]
// const add =(num)=> num* num
// const result = number.map(add)
// console.log(result);

// Arrow fucntion
// arrow funciton is suagr for a devleper bacuse we can implicit the return on some case

// const arrow =(num)=> num * num
// console.log(arrow(3));

// example as normal fucntion accept the argument without paramter

// example 1 as normal funciton

// let number =[1,2,3,4,5]

// function normal() {
//   console.log(arguments);
// }
// normal(...number) 


// arrow fucntion

// let number =[1,2,3,4,5]
// const arrow =()=>{
//   return console.log(arguments);
// }
// arrow(...number) // it will throw error only not show thw number

// polyfill
// polyfill used to work on older broswer
// polyfill map

//     Array.prototype.mymap=function (cb){
//         let temp =[];
//         for(let i=0; i< this.length; i++ ){
//           temp.push(cb(this[i],i,this))
//         }
//         return temp
//     }

//     let number =[1,2,3,4,5]
//     let result =number.mymap((item ,index)=>(
//           item * 10
//     ))
// console.log(result);


//  polyfil filter

//  Array.prototype.myfilter= function(cb){
//     let temp =[]

//     for(let i=0;i<this.length; i++){
//       if (cb(this[i],i,this)) {
//           temp.push(this[i])
//       }
//     }
//     return temp
//  }

//  let number =[1,2,3,4,5]

//  let result=number.myfilter((item)=>(
//         item>=4
//  ))

//  console.log(result);

// remove duplicated from array

// let number =[1,2,3,4,1,3,5,6,2,4,]
// let result= [...new  Set(number)]
// console.log(result);

// get the duplicats from array

// let number =[1,2,3,4,1,3,5,6,2,4,]

// let result = number.filter((item,index,arr)=>(
//     arr.indexOf(item) !== index
// ))
// console.log(result);

// merge to array

// const array1 = [1, 2, 3, 2, 3];
// const array2 = [10, 5, 8, 5, 3];

// const merged =[...array1,...array2]
// console.log(merged);

// another way is concat
// let merged = array1.concat(array2)
// console.log(merged);

// get the minimum value in array
// const array = [10, 5, 8, 5, 3];
// let result = Math.min(...array)
// console.log(result);

// get the maxmum value in array
// const array = [10, 5, 8, 5, 3];
// let result = Math.max(...array)
// console.log(result);

// Empety an array

// const array = [10, 5, 8, 5, 3];
// console.log(array.length);
// const result = array.length =0
// console.log(result);

// another method is [] --> empty brocket

// let array = [10, 5, 8, 5, 3];
// console.log(array.length);
// array=[]
// console.log(array.length);

// another mathod can use as splice

// const array = [10, 5, 8, 5, 3];
// console.log(array.length);
//     array.splice(0,array.length)
//     console.log(array.length);

// check an array type

// const arr = [1, 2, 3];
// console.log(typeof arr);
// console.log(Array.isArray(arr));


// check teh includes()

// const arr = [1, 2, 3];
// console.log(arr.includes(2));

// splice method

// const arr = [1, 2, 3];
// here only i found if we use 1 digit as splice it will empty thbe array
// arr.splice(0,0,10,9)
// arr.splice(0)
// console.log(arr);

// add a object inside an array

// let array = [1, 2, 3];
// let object = {x: 12, y: 8};

// let result = [...array,object]
    // array.push(object) //  remeber push change the original array
// console.log(array);



// object

// creating object literlas

// const person ={
//   name:'thomson',
//   age:24,
//   city:'chennai',
//   greet (){
//     console.log(`hello ${this.name}`); 
//   }
// }
// access a object
// console.log(person.name);
// console.log(person.greet());

// check obejct counts 
// let keyresult = Object.keys(person)
//   let result = Object.keys(person).length
//   let anotherresult =Object.values(person)
// console.log(keyresult);
// console.log(result);
// console.log(anotherresult);



// clone a object

// const person ={
//   name:'thomson',
//   age:24,
//   gender:'male'
// }

// let clone1 =Object.assign(person) //shallow clone
// let clone2={...person} //shallow clone
// let clone3 = JSON.parse(JSON.stringify(person)) //deep clone

// console.log(clone1);
// console.log(clone2);
// console.log(clone3);



// interview based qustion to create a objevct

// method chaining

// let mathopertion ={
//     total :0,
//     sum(a){
//       this.total+=a;
//       return this;
//     },
//     multiply(b){
//       this.total*=b;
//       return this
//     },
//     subtract(c){
//       this.value-=c;
//       return this
//     }
// }

// let result = mathopertion.sum(5).multiply(2).subtract(3).total;
// console.log(result);

























  











 














 





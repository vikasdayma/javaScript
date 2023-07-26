//Array method
// for Each
//map method
// filter method
//reduce method
const  numbers =[2,3,4,5];
// first loop method ⬇️
// function  myltiplyby2(number,index){
//     console.log("index is", index) 
//     console.log("number is ",number*2);
//} 
// for(let i = 0; i<=numbers.length-1;i++){
//     //console.log(i);
// myltiplyby2(numbers[i],i);
// } 
//second for each method same work is done by for each by passing a function inside it it will pass
// the arguments in function
// numbers.forEach(myltiplyby2);  ⭐
// also we can write it as ⬇️
numbers.forEach(function(number,index){
    console.log("index is", index) ;
       console.log("number is ",number*2);
});
const users = [
    {firstname : "vikas",age:19},
    {firstname : "kundan",age:20},
    {firstname : "amit",age:19}
 
] ;
// now we have to print firstname of every user 
users.forEach(function(user){
console.log(user.firstname);
});
 // map Method ⭐
 const nums= [3,4,6,8,1]
 const square = function(number){
    return number*number; // here always return in map because if we wrtie console then it will create
    //problem new array squarenum not get any return and will print undefined elements

 }
 // map function will always create a new array
 const squareNumber =nums.map(square);
 console.log(squareNumber);
 // also write it as
 // const squareNuber = nums.map(function(number){ // function creation also can be done as 
// (number)=> {} or we also can give 2 parameters as function(number,index) easy 
// return number*number ;
 //});


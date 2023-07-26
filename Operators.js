// type of operators
//data types(primitive data type )
// string ,numbers,booleans,undefined,Bigint,symbol,
let age =22; 
let firstname= "Hello";
console.log(firstname);
// To Convert from  number to String just write for ex age=age+"" ; this will convert it into string 
age=age+"" ;
console.log(typeof(age));
age="14";
age=Number(age);
//from string to num
let myStr= "34";
//put + sign before String and it will convert into number
myStr=+"34"
console.log(typeof myStr);
// 2nd Method to convert
let sum =18 ;
sum= String(sum);
console.log(typeof sum);
sum=Number(sum);
console.log(typeof sum);
// add+ in front of string and it will be convert into number
let string1="12";
let string2="123";
console.log(+string1  +   +string2);
// Template String
let Age=12;
let Name="vikas";
// To write  template string Str= 'my name is  ${name}   and i am${Age} year old'
//BigInt
 let abcd =BigInt(12);
 console.log(abcd);

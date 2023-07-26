//hoisting ⭐
hello();
//here we call function before declaring but it is working (just js things )

function hello() {
    console.log( "Hello World");

}
// function inside function⭐ 
console.log("⭐");
//lexical scope
// function and block scope
// {} this is called block and if we create let and const inside it then it will be only using
// inside it not outside but in case of var it will be used
let nickname = "vikku";
{
    let firstname = "vikas";
    console.log(firstname) // code only works here
console.log(nickname); // it will work beacuase it is defined outside
}

//console.log(firstname); // this will not run it will show firstname not defined because it is out
// so the point is simple and  clear we can use outside variables inside even if it is let or var
// but we cannot use inside{} block  variables outside if it is let and if var then we can use it
// outside
// default parameter ⭐ 
// traditional method before 2015
// function add(a,b){
   
// if(typeof b==="undefined"){
//     b=1;
// }
// return a+b;
// }
// const addition = add(4);
// console.log(addition);
// new method
function add(a,b=0){ // put direct value default like this easy
    return a+b;
}
const addition =  add(4);
console.log(addition);
//  rest parameters ⭐ 
function myfunction(a,b,...c){
    console.log('a is ',a);
    console.log('b is ',b);
    console.log('c is ',c);
}
myfunction(1,2,3,4);

 function addAll(...numbers){
    let sum = 0 ;
    for(number of  numbers){
        sum=sum+number ;
        
    }
return sum;
 }
const a = addAll(1,2,3,4,5,6) ;
console.log(a);



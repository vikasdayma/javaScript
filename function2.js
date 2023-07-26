// param destructor
const person ={
    firstname : "vikas",
    gender:"male"

}
// function printdetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender); 
//}
function printdetails({firstname,gender,age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);

};
// call back function ⭐
//function myFunc(a,b){
    //console.log(a);
    //console.log(b);
    //console.log('Hello World');
//}
//myFunc("abc",[1,2,3]);
function myFunc(callback){ // function myFunce(a) {
    // a(); } like this we wrtie call back in place of a
callback();
}
function myFunc2(){
    console.log("inside my fuc 2")
}
myFunc(myFunc2);
// this is how callback function runs  we give input myfunc2 in function 1 and then call back  

// function returning function ⭐
function firstFunc(){
    function hello(){
        return "Vikas" ;
    }
return hello;
};
const ans = firstFunc();
console.log(ans);
console.log(ans()) ;



// sort method
//ascii table
//sorting
const numbers = [1,4,3,2,20,18];
//numbers.sort() ;

//console.log(numbers);
// it is sorting as after creating them string and only sorting first letters of words or number
// for exam if 1200 is there it will only chech 1 and code for 1 (ascii ) will be consider  49 so 1200 = 49 in js  
usernames.sort();
console.log(usernames) ;
// so to solve this problem we will give call back function input to this sort
numbers.sort((a,b)=>{
    return b-a ;
});
console.log(numbers);
console.log("vikas");
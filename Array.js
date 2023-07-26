//basic arrays 
//to create array let array =[a,b,c]
// unshift to add one element in array from front side 
// shift to remove element from front 
// pop remove from back
// push add element from back 

let nums =[1,2,3];
console.log(nums);
nums.pop();
console.log(nums);
nums.push(3);
console.log(nums);
nums.shift();
console.log(nums);
nums.unshift(1,2);
console.log(nums);
console.log(Array.isArray(nums));

// to create clone(same array with diff name)  there are two three methods
// Method 1 is Slice
let array1=[1,2,"vikas"];
let array2= array1.slice(0);
console.log(array2);
// Method 2 is concat something to it 
let array3=[].concat(array1);
console.log(array3);
// Method 3 Spread operator
let array4=[...array1];
console.log(array4);
console.log(array1===  array2);
// ans false means clone succesfully both are not same and same with array 3 and 4 
// now there may be more element in this arrays so we can also add 
let array5 =array1.slice(0).concat([1,"vikas"]);
console.log(array5);
let array6=[].concat(array1,33,"abc");
console.log(array6);
// last type to add something is  spread out
let oneMoreArray =["item1","item2"];
let array7= [...array1,...oneMoreArray];
console.log(array7);

 
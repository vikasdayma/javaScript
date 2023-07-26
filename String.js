//String indexing
let firstName="vikas";
// here v has 0 index and +1 for next index for S =4 Index
console.log(firstName[3]);
console.log(firstName[4]);
console.log(firstName.length-1);
//length -1 to get index of last element 
// no of spaces add can increase length
// trim()
let firstname ="vikasd"
console.log(firstname.length-1);
// here 13 is length now trim it to remove space
 let newString=firstname.trim(2);
console.log(newString.length);
// so now it remove all spaces 
//toUpperCase();
let firstname1="VIkA S"
let first = firstname1.toLowerCase();
console.log(first);
let firstname2 = "vikasdayma";
let newString1=firstname2.toUpperCase();
console.log(newString1)

//slice to cut it in pieces we can also use (2)or(2,3) Both     
let firstName1= "ankesh";
let newString3 =firstName1.slice(0,4);
console.log(newString3);

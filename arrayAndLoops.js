const fruits =["mango","apple","orange","gavava"] ;
let j = 0 ;
while(j<=fruits.length-1) {
console.log(fruits[j]);
j++ ; 
}
let count =0 ;
let array1 = [1,2,4,5,54,15,12];
let array2 = [3,2,45,15,1]; 
let i = 0 ; 
while(i<=array1.length-1){
    let k = 0;
    while(k<=array2.length-1){
        if(array1[i]==array2[k]) {
            count++
        }
        k++ ;
    }
    i++ ;
    
}
console.log(count);
//⭐ Arrays Destructing
const myArray =["obj1","obj2"] ;
//  let myvar1 =myArray[0];
//  let myvar2=myArray[1];
// console.log(myvar1);
// console.log(myvar2);
// // we can also write this as   also write
 let [myvar1,myvar2]=myArray ;
 console.log(myArray);
 
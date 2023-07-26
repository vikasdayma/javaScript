// while loop ⭐⭐
let sum=0 ;
let i= 1;

while(i<=100){
    sum=sum+i;

i++ ;
}
// FOr loop ⭐⭐

console.log(sum);
for(let j = 0 ; j<=9;j++){
    console.log(j);
}
// if we use var in place  of let then it can be used outside loop 
 let fact = 1 ; 
 let n =prompt();
 let j =1 ; 
 while(j<=n){
    fact = fact*j
    j++
 }
console.log(fact);
 // same function in for loop 
 let fact1 =1 ;
 for(let k=1 ; k<=n;k++) {
    fact1 =fact1*k ;

 }
 console.log(fact);
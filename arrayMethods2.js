// filter method
const numbers = [1,2,3,4,5];

const isEven=function(number){
return  number%2===0 ;
}
const evenNumbers =numbers.filter(isEven);
console.log(evenNumbers);

  const isOdd=(number)=>{
 return number%2!==0 ; 
  }
  const oddNumbers = numbers.filter(isOdd);
  console.log(oddNumbers);
  //   Reduce Method  ⭐
  const nums= [1,2,3,4,5]
  // sum all numbers by reduuce method
  
  const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
  });
  console.log(sum);
  // accumulator currnetvalue return 
  // 1               2          3      intially  now return = accumulator =return  and current value =next value
 //  3                3          6
 //   6                4         10 
 //   10              5          15
 //  no values left in num so 15 will be ans for 1 2 3 4 5 sum  which is true 
  
 const userCart =  [
  {productId :1,productName:"mobile phone",productPrice:12300,},
  {productId : 2,productName: "laptop",productPrice:30020,},
  {productId : 3,productName: "laptop1",productPrice:30000,}
 ]
 const sum1 =userCart.reduce((totalPrice,currentPrice)=>{
 

  return   totalPrice + currentPrice.productPrice ;
  
 },0)
 console.log(sum1);
 
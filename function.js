// functions ⭐
console.log("Happy Birthday to You"); 

 function happyBirthdaySong(){
    console.log("Happy Birthday to You");


 }
 happyBirthdaySong();

 function sumOfTwoNumber( a,b){
  return a+b ;
 }
 let ans = sumOfTwoNumber(3,3);
 console.log(ans);

 function findTarget(array,target){
    for(let i=0;i<=array.length-1;i++){
        if(array[i]===target){
            return i ;
        }
      
    
    }
    return -1;
 }
 const myarray = [1,2,3];
  
  let ans1 =findTarget(myarray,3);
  console.log("this  is index of array in which target is there",ans1);
   // Expression for Function
   const sayHello = function(){
     console.log("Hello Vikas");
   }
  sayHello();
  const anyString = function(string){
    return string[0];
  } 
  // we can also write  cost anystring =string=string[0] ⭐
  // because here only one parameter is there so we can remove () and only 1 return also remove{}
  console.log(1) ;
  console.log(2);
    const ans2 = anyString("vikas");
    console.log(ans2);
// arrow functions ⭐
    //in place of writing const aarav =function(){} like this you should Write ⭐
    // const aarav = () =>{} 
    const aitr = () => {
        console.log("Cs4-vikas");
    }
 aitr();

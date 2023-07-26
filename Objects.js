// objects⭐
// arrays are good but not efficient 
// objects stroe key value pairs
// objects dont have index
 //const person = {name:"Vikas",age: 22};
 // it can also be written as
  const person = { 
 name:"vikas",
 age: 22 ,
 hobbies: ["guitar","music","book reading"]
  }
 
 console.log(person)
 console.log([person.hobbies])
 // to add one more keyvalue pair 
 person.gender = "male";
 console.log(person);
// console.log([person.name])
//we can also write it as  row 20
console.log(person["name"])
// diffrence between . and [] bracket notation
// how to iterate a object
 for(let key in person){
    //console.log(person.name)
    //console.log(person.key)
    console.log(`${key}  : ${person[key]}`);
    console.log(typeof (Object.keys(person)));
 }
    // computed properties
    const key1 = "objectkey1";
    const key2 ="objectkey2";
   const value1="myvalue1" ;
   const value2 = "myvalue" ;
    
   ///const obj ={
    // objkey1 :"myvalue1",
    //objkey2 : "myvalue2",
//}
//    const obj = {
  //      key1 :value1 ,
    //    key2 : value2 
    //}
//console.log(obj);
// to use it as key1 as objkey write [key1]
// [key1] : value1 (it will print obejectkey1:myvalue1)
const obj ={};
obj[key1]=value1;
obj[key2]=value2;
console.log(obj);

   
    
 
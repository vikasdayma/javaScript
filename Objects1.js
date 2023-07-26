//Spread Operator
//const array1= [1,2,3];
//const array2 =[4,5,6];
//const newarray = [...array1];
//const newarray1 = [...array1, ...array2,"vikas"];
//console.log(newarray);
//console.log(newarray1);
const abc = {
    key1:"value1" ,
    key2:"value2" ,
    key1: "value45",
};
//console.log(abc);
const abc1 = {
    key3:"value3" ,
    key4:"value4" ,
    key1: "value5",
};

// key 1 is count as value 45 because in the end it is used
 // spread operator uses in object ⭐
  const newobject = {...abc,...abc1};
  const newobject1 ={...abc1,...abc}; // in this object  values are consider for first because objects
  // are objects
  console.log(newobject);
  const newobject2={..."abc"} ; // classic example of spread operator in String
  console.log(newobject2);
  const newobject3 = {..."abcdefghijklmnopqrstuvwxyz"};
  console.log(newobject3);

// Object Destructing  ⭐
const artist ={
   singername: "arijit singh" ,
   famoussong: "hamdard",
   year: 2014,
   nextalbum:"apna bana le",
    
};
 const{singername,famoussong,...restprops} =artist;
 console.log( singername,famoussong);
 //objects inside array
 const users = [
    {userid: 1,firstName:"vikas",gender:"male"},
    {userid: 2,firstName:"amit",gender:"male"},
    {userid: 3,firstName:"sumit",gender:"male"},  
    
]
console.log(users);
for(let user of users) {
    console.log(user);
    console.log(user.userid);
    console.log(user.firstName);
}
// nested destructing ⭐

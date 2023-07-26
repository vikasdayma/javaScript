// and & or operator
let firstName="Vikas";
let age=19;
if(firstName[0]==="V"&& age>18);{
    console.log("name starts with V and age is above 18");
}
// for or || one of them  will true and it will work
if(firstName[0]==="V"||age<18){
    console.log("no no");

}

// ⭐ Nested if else  means if else in one another if(else ( ↓  ↓ given in example))

let winningNumber=19;
let userGuess=+prompt("Guess a number");
// prompt will give string data type to convert it into integer + sign in infront of it
//console.log(typeof userGuess,userGuess);
if(winningNumber === userGuess){
    console.log("Congratulations your guess is right");
}

  else if(userGuess<winningNumber) {
        console.log("Too low!!!!");
     }
     else{
        console.log("Too High!!!!");
     } 

// if 
//else if
// else if
// else if 
// else 
// Switch Statement ⭐
let day =+prompt("Enter day number");
//if(day===0){
  //  console.log("Sunday");
    //after this else if else if continue till 6 and after that invalid day
    // }

// but we can do this work from switch statement 
switch(day){
    case 0:
        console.log("Sunday") ;
        break;
        case 1 :
            console.log("MONDAY") ;
            break ;
        case 2   :
        console.log("Tuseday") ;
        break;
        case 3 :
            console.log("Wednesday");
            break;
            // continued till saturday 
}



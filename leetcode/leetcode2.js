// String Reversal: 
 //Write a function to reverse a given string in JavaScript without using built-in reverse functions

 function stringRev(str){
    let ab=``;
    for(let i=str.length-1;i>=0;i--){
        ab+=str[i];
    }return ab;
}
let orginalString =`GEEKSTER`
let op =stringRev(orginalString)
console.log(orginalString);
console.log(op);

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


// Anagram Check: 
// Implement an algorithm to check if two strings are anagrams of each other (contain the same characters with the same frequency)

function anagram(s,t){
    if(s.length!==t.length){
        return false;
    }
    const map1={};
    const map2={};
    for(let i=0;i<s.length;i++){
        let ch1=s[i]
        map1[ch1]=(map1[ch1]||0)+1;
        let ch2=t[i]
        map2[ch2]=(map2[ch2]||0)+1;
    }
    for(let i=0;i<s.length;i++){
        if(map1[s[i]]!=map2[s[i]]){
            return false
        }return true
    }
}
console.log(anagram("anagram","nagaram"));
console.log(anagram("abhinav","reddy"));
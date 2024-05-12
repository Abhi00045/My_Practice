//  Array Sum:
// Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.
    // function twoSum(arr,tar){
    //     let n= arr.length
    //     let ans =[]
    //     for(let i=0;i<arr.length;i++){
    //         for(let j=i+1;j<arr.length;j++){
    //              if(arr[i]+arr[j]=== tar){
    //                 ans.push([arr[i],arr[j]]);
    //              }
    //              }
    //         }return ans;
    // }
    // let res =twoSum([2,3,4,1,5,3,6,3],7)
    // console.log(res);

   // String Reversal: 
   //Write a function to reverse a given string in JavaScript without using built-in reverse functions
// function stringRev(str){
//     let ab=``;
//     for(let i=str.length-1;i>=0;i--){
//         ab+=str[i];
//     }return ab;
// }
// let orginalString =`GEEKSTER`
// let op =stringRev(orginalString)
// console.log(orginalString);
// console.log(op);

// Anagram Check: 
// Implement an algorithm to check if two strings are anagrams of each other (contain the same characters with the same frequency)

// function anagram(s,t){
//     if(s.length!==t.length){
//         return false;
//     }
//     const map1={}
//     const map2={}
//     for(let i=0;i<s.length;i++){
//         let ch1=s[i]
//         map1[ch1]=(map1[ch1]||0)+1;
//         let ch2=t[i]
//         map2[ch2]=(map2[ch2]||0)+1;
//     }
//     for(let i=0;i<s.length;i++){
//         if(map1[s[i]]!=map2[s[i]]){
//             return false
//         }return true
//     }
// }
// console.log(anagram("anagram","nagaram"));
// console.log(anagram("abhinav","reddy"));

// Array Intersection:
//  Given two arrays, write a function to find their intersection (common elements).

// String Compression:
//  Write a function to perform basic string compression using the counts of repeated characters.
//  For example, "aabcccccaaa" would become "a2b1c5a3."

// function compress(str){
//     let charCount={}
//     for(char of str){
//         if(charCount[char]){
//             charCount[char]++
//         }
//         else{
//             charCount[char]=1;
//         }
//     }
//         let com=``;
//         for(let key in charCount){
//             com +=key+charCount[key]
//         }return com
// }
// let srt=`MaheshBabu`
// console.log(compress(srt));

// String Palindrome: 
// Create a function to check if a given string is a palindrome (reads the same forwards and backwards)
//  while ignoring non-alphanumeric characters.
 function palindrome(str){
    let n=str.length;
    for(let i=0;i<n/2;i++)
        {
        if(str[i]!==str[n-1-i]){
            return `notPalindrome`
        }
        }return `Palindrome`
 }
 let val=palindrome(`madam`)
 console.log(val);
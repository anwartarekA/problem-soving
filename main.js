// High Order Functions 
// It Is Function That Accept Functions As A Parameters

// 1- map method --> It Accepts Two Parameters map(CallBackFunction( Element , Index , Array) , This Arguments)
/*
    notes :-
    1-Not Include Return
    2-It Return New Array
*/

// Examples on map

let elements = [10 , 50 , 30 , 40];

let addetion = elements.map(function(ele,index,array){
// console.log(`the ele is : ${ele}`);                         the current element
// console.log(`the index of the element is : ${index}`);      the index of current element
// console.log(array);                                         the current array    
// console.log(this);                                          10
// console.log("=========");
return ele + ele;
},10)

console.log(addetion);

let newarray =[10 , 50 , 30 , 40];
let arr=[];
for(let i = 0 ; i<newarray.length; i++)
{
    arr.push(newarray[i]+newarray[i]);
}
console.log(arr);


 // anounemous function
function addation (ele)
{
    return ele+ele;
}
let add = elements.map(addation);
console.log(add);


// arrow function
let addi = elements.map(ele=>ele+ele);
console.log(addi);


// sweap the world
let UserName = "anWAR";
let sweapname = UserName.split("").map(function(ele){
    return ele===ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");
console.log(sweapname);


// // invert numbers
let nums = [-10, 20 , 40 , 50 , -100 , -70 ];
let invertnums = nums.map(function(ele){
return -ele;
});
console.log(invertnums);

// //ignore numbers values

let user_name = "anw45ar01";

let finalvalue = user_name.split("").map(function(ele){
    
    return isNaN(parseInt(ele)) ? ele : "";
}).join("")

console.log(finalvalue);


// 2-Filter --> Like Map but it return array of elements that win the test

// examples

// 1- print the even values of array 

let allnums = [10 , 11 , 15 , 20 , 40 , 50 , 100];

let EvenNumbers = allnums.filter(function(ele){
return ele %2 === 0 

})
console.log(EvenNumbers);

// // another solution

let newarr = [];
for(let i = 0 ; i < allnums.length ; i ++)
{
    if(allnums[i]%2===0)
    {
        newarr.push(allnums[i]);
    }
}
console.log(newarr);

// // 2- print words that starts with "a"

let names = ["anwar","kareem","belal","tarek","ahmed","sandy","afnan","sara","amged"];
let finalNames=names.filter(function(ele){
    return ele.startsWith("a");
});
console.log(finalNames);
 
// // 3-remove word its length grater than 4

let words = "i love foood code to playing much";
let finalwords = words.split(" ").filter(function(ele){

    return ele.length <= 4 ;

}).join(" ");
console.log(finalwords);

// // 4- ignore number from the string

let MyName = "anw451a10r ta45re61k";

let result = MyName.split("").filter(function(ele){
return isNaN(parseInt(ele));
}).join("");

console.log(result);

// // 5- get the numbers from the state and multipy it 

let word = "anw15ar2";
let multiplying = word.split("").filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele , index){
    return ele * ele ;
}).reduce(function(acc,curr){
    return acc * curr ;
})
console.log(multiplying);

// 3- reduce ---> Like map & filter as it has two parameters reduce (csllbackfunction( accumelator , current-element , indexof-current-element , array), initial-value)
// examples

//1-addition of numbers 

let numbers = [10 , 20 , 30 , 40 , 50];

let addition = numbers.reduce(function(accumelator , current , index , array){
    console.log(`the accumelator is : ${accumelator}`);
    console.log(`the current is : ${current}`);
    console.log(`the index is : ${index}`);
    console.log(`${array}`);
    console.log("=".repeat(30));
    return accumelator + current;
});

console.log(addition);

// // 2- remove @ and print the word

let sss = "anw@ar@@@@";
let removingadd= sss.split("").filter(function(ele){
    return !ele.startsWith("@")
}).reduce(function(acc,current){

    return acc + current;
});

console.log(removingadd);

// // 3- print the large words

let wor = ["goooooooooo", "blablablablabla" , "haaaaaaaaaaaa" , "noooooooooo", "yesyesyesyes"];
let final_wor = wor.reduce(function(accumelator , current){
    console.log(accumelator);
    console.log(current);
    console.log("=".repeat(60));
    return accumelator.length > current.length ? accumelator : current ;
})
console.log(final_wor);
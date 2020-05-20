/*****************### Function #1: Array Slice***********/

var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"]
var modifiedFoods=[]
function slice(arg1,arg2){
 modifiedFoods=foods.slice(arg1,arg2)
 return modifiedFoods;
}
console.log()
/***************### Function #2: Array Splice */
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"]
foods.splice(2,0, "noodles", "icecream")
console.log(foods)
/*****************### Function #3: Filter */
var numberArray = [12,324,213,4,2,3,45,4234];
var newArray=[]
function isEven(numberArray){
    for(var i=0;i<numberArray.length;i++){
        if (numberArray[i]%2==0)
        {
            newArray.push(numberArray[i])
        }
    }
    return newArray
}
isEven(numberArray)
/*********************### Function #4: Reject */
var numberArray = [12,324,213,4,2,3,45,4234];
var newArray=[];
function nonPrime(numberArray){
    for(var i=0;i<numberArray.length;i++)
    {    var count=0
        for(var j=1;j<=numberArray[i];j++)
        {
        if (numberArray[i]%j==0)
        {    count+=1
            
        }
    }
    if (count==2)
    { 
        newArray.push(numberArray[i])
    
    }
    
}
return newArray;
}
nonPrime(numberArray)

// Lambda Function for isEven
var numberArray = [12,324,213,4,2,3,45,4234];

isEven=(numberArray)=>{
    evenArray=numberArray.filter((even)=>{return even%2==0})
    return evenArray;
}
console.log(isEven(numberArray))
//Lamnda Function For findSquareOfNumbers()
const myArray = [11, 34, 20, 5, 53, 16];
findSquareOfNumbers=(myArray)=>{
    squareArray=myArray.map((number)=>{return number*number})
    return squareArray;
}
console.log(findSquareOfNumbers(myArray));



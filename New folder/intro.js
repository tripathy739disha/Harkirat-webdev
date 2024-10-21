let a=1;
a=2;
console.log(a);
let firstname="harkirat"
let age=7
let isMarried=false;
console.log("this person name is "+firstname+" and its age is "+age)
if(isMarried==false){
console.log(firstname + "is not married")
}
else{
console.log(firstname + "is  married")
}
let ans=0

for(let i=0;i<=100;i++){
    ans+=i
}
console.log(ans)
let arr=["Disha","Rohan","Rahul"]
const agearr=[21,22,45]
console.log(arr[0])
for(let i=0;i<agearr.length;i++){
    if(agearr[i]%2==0){
        console.log(agearr[i])
    }
}



const user1={
    firstname:"Disha",
    gender:"female"
}
const Allusers=[{
    firstname: "Disha",
    gender:"female"
},{
    firstname:"Rohan",
    gender:"male"
},{
    firstname:"Rahul",
    gender:"male"
}
]
for(let i=0;i<Allusers.length;i++){
    if(Allusers[i]["gender"]=="female")
        console.log(Allusers[i]["firstname"])
}

function findSum(a,b){
    return a+b;
}
const val= sum(5.6)
console.log(val)


/*function sum(num1,num2,fucToCall){
    let val1=num1+num2
   return fucToCall(val1)
}
 function displayResult(data){
      console.log("Result of the sum is: "+data)
 }
 function displayResultPassive(data){
    console.log("Sum's result is: "+data)
 }
 //you can only call one function
 //how to display result of sum
 const anss=sum(1,2)
console.log(6,7,displayResult)*/
 function calculateArithmetic(a,b,type){
    if(type=="sum"){
        const value=sum(a,b)
        return value;
    }
    if(type=="minus"){
        const value=minus(a,b)
        return value
    }
 }
 function sum(a,b){
    return a+b
 }
 function minus(a,b){
    return a-b
 }
 function difference(a,b){
    return a/b
 }
 function 

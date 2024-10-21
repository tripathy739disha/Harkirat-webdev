function realstr(str){
    console.log("The original string is: "+str)
    console.log("The length of the string is: "+str.length)
}
realstr("disha")
function findIndexOf(str,target){
    console.log("The original string is: "+str)
  console.log("Index: "+str.indexOf(target))  
}
findIndexOf("Hello World","World")
 function getSliced(str,start,end){
    console.log("The original string is: "+str)
    console.log("The sliced string is: "+str.slice(start,end))
 }
 getSliced("Disha Tripathy",0,5) 

 const value="Disha Tripathy"
 let ans=value.substr(1,3)//last argument is the length of the final str
 console.log(ans+"...")
 let ans2=value.slice(1,3)//last argument is upto which index
 console.log(ans2)

 function cutIt(str,startIndex,endIndex){
  let newstr=""
  for(i=0;i<str.length;i++){
  if(i>=startIndex && i<endIndex){
    newstr=newstr+str[i]

  }
  return newstr;
}
 }
 const va="Disha Tripathy"
 let ans3=va.slice(0,3)
 console.log(ans3)
 console.log(cutIt(va,0,3))

 const str="hello world";
 console.log(str.replace("llo","javascript"))


 const v2="hi my name is disha";
 const words=v2.split(" ");
console.log(words);

const v3="     disha      ";
let g=v3.trim();//removes space from start and end
console.log(g)

console.log(g.toUpperCase())

console.log(parseFloat("3.14"));
console.log(parseInt("42"));
console.log(parseInt("42pa"));


const initialArray=[1,2,4];
initialArray.push(2);
console.log(initialArray);
initialArray.pop();
console.log(initialArray);
initialArray.shift()//deletes element from start
console.log(initialArray);
initialArray.unshift(7)//put elements in the start
console.log(initialArray);
 
const iniArray=[1,2,3,4]
const secArray=[7,8,9,0]
let v4=iniArray.concat(secArray);
console.log(v4);

function logThing(str){
   console.log(str);
}

initialArray.forEach(logThing)

logThing(1);
logThing(2);
logThing(3);



//callback
function log1(){
  console.log("hello world 1");

}
function log2(){
  console.log("hello world 2")
}

function whats(fn){
  fn();
}

whats(log2);


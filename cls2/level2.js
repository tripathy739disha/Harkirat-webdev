///Class ,Date,JSON,Math,Object
/*const dog={
    name:"doggie",
    legcount:4,
    speaks: "bhow bhow"
};
 const cat={
    name:"suzie",
    legcount:2,
    speaks:"mewo meow"
 }

 function printstr(animal){
    console.log("animal"+animal["name"]+" "+animal["speaks"]);
 }
 printstr(dog)
 printstr(cat)*/

//classes and objects

class Animal{
    constructor(name,legCount,speak){
        this.name=name;
        this.legcount=legCount;
        this.speak=speak;
    }
    static myType(){
        console.log("Animal");
    
    }
    speaks(){
        console.log("Hi there, it's "+this.speak)
    }
}

let dog= new Animal("doggie",4,"bhow")//creat obj
let cat=new Animal("suzie",4,"meow")
dog.speaks();//call function on abject
console.log(Animal.myType());//can be called without inisiating an obj , as static belongs to the class
const currentDate =new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1)
console.log(currentDate.getFullYear());

console.log("Time in milliseconds since 1970:",currentDate.getTime());
//epoch timestamp

function calculateSum(){
    let a=0;
    for(let i=0;i<100000;i++){
       a=a+i 
    }
    return a;
}

const beforeDate=new Date();
const beforeTimeInMs= beforeDate.getTime();
calculateSum();
const afterDate=new Date();
const afterTimeInMs= afterDate.getTime();
console.log(afterTimeInMs-beforeTimeInMs);


//stopwatch
function currentTime(){
    console.log(new Date().getTime());
}
//setInterval(currentTime,100);
const fs=require("fs");
    //filesystem module

    fs.readFile("a.txt", "utf-8", fuction(err,data))
    {b                  
        console.log(data)
}

    console.log("hi there");
    let a=0;
    //takes very long longer than the read file so which will b executed first?
    for(let i=0;i<1000000;i++){
        a++;
    
    }
    console.log("hi there 2");
    //a asynchronise func will get executed after all the continuous line of code even when it takes less time than others in line 

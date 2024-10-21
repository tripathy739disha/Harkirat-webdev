var d=new Promise(function(resolve){
      resolve("hi there");
});

d.then(function(){
    console.log(d);
})
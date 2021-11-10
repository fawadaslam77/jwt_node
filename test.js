
  // in this file we will write custom call backs and promises that are used in node extensively.
  

  // here is an example call back function
  function testCallBackFunction(a,b,callback){
     if(a<10|b<10){
         callback("numbres must be greater then 10");
         return;
     }
    var result=a*b;
    callback(null,result);
 }

 // here is an example promie function.

 function testPromiseFunction(a,b){
     return new Promise((resolve,reject)=>{
         if(a<10||b<10){
             reject("numbers must be greater then 10");
         }
         else{
             resolve(a*b);
         }
     });
 }

 // lets create a json array containg an object with two numbers at each index
 //var testJsonArray =[{n1:10,n2:20},{n1:1,n2:2},{n1:23,n2:25},{n1:5,n2:6}]


 // now lets loop through this array and execute first function 
//  testJsonArray.forEach(obj=>{
//      testCallBackFunction(obj.n1,obj.n2,(err,result)=>{
//          if(err){
//              console.log("logging error of testArray using callback technique");
//          }
//          else{
//              console.log("this is result of  testArray using callback technique and result is: "+result);
//          }
//      });
//  });

 // now do the same for second function that implements promises technique.

//  testJsonArray.forEach(obj=>{
//     testPromiseFunction(obj.n1,obj.n2).then(result=>{
//         console.log("this is result of  testArray using promise technique and result is: "+result);
//     })
//     .catch(err=>{
//         console.log("loggin error  of testArray using promise technique");
//     });
//  });

 // again loop through the array and execute the callback function
//  testJsonArray.forEach(obj=>{
//     testCallBackFunction(obj.n1,obj.n2,(err,result)=>{
//         if(err){
//             console.log("logging error of testArray using callback technique");
//         }
//         else{
//             console.log("this is result of  testArray using callback technique and result is: "+result);
//         }
//     });
// });

testPromiseFunction(20,30).then(result=>{
    console.log(result+" this is result of promise function")

}).catch(err=>{
    console.log("this is an error of promise function");
})


testCallBackFunction(20,30,(err,result)=>{
    if(err){
        console.log("throwing an error from callback function");
    }
    else{
        console.log(result+" this is result of callback");
    }
});

 console.log("Program ended");

// the out put of this program will be some thing like this:
//600 this is result of callback
//Program ended
//600 this is result of promise function

// so we can conclude call back approch byDefault is synchronous approch where as promsie approch byDefault is Asynchronous approch.
// how ever if we are doing some async job inside a callback and handling it accordingly, then in that case callback technique can be modefied into an asynch approch.

// you can also uncomment the array part where we are using these functions inside foreach loop for further verificaiton.




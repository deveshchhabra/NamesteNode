//Modules protects their variable and function from leaking
require("")
console.log("sum module")
var x="Hello World";
 function calculateSum(a,b){
    const sum=a+b;
    console.log(sum);
}

setTimeout(()=>{
    console.log("setTimeOut");
},3000);
z=110;
console.log('z=',z);
console.log(module.exports)
module.exports.x=x;
module.exports.calculateSum=calculateSum;

// module.exports={calculateSum};
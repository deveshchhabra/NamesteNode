console.log("Hello World")
const crypto=require("node:crypto");
console.log("_+=====_+")
//pbkdf2-password base key deravtive function
//This is Async
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("Second Key is Generated");
});
//This is Sync
setTimeout(()=>{
    console.log("Run Instant")
},0);

crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("First Key is Generated");

var a=1078698;
var b=20986;
let multiplyfunction=()=>{
    let result=a*b;
    return result;
}
var c=multiplyfunction();
console.log("Multiplyfuction is:",c)
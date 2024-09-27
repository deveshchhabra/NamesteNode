const fs=require("fs");
setImmediate(()=>console.log("setImmediate"))
setTimeout(()=>console.log("Timer Experied"),0);
Promise.resolve("promise").then(console.log)
fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("2nd Timer Experied"),0);
})
process.nextTick(()=>{
process.nextTick(()=>console.log("innerrprocess.Tick"))
    
    console.log("OUTER process.Tlick")})


console.log("Last line of the file.");

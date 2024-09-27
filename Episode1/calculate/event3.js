const fs=require("fs");
setImmediate(()=>console.log("setImmediate"))
setTimeout(()=>console.log("Timer Experied"),0);
Promise.resolve("promise").then(console.log)
fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("2nd Timer Experied"),0);
process.nextTick(()=>console.log("2nd process click"))

    setImmediate(()=>console.log("2nd setImmediate"))
    console.log("File Reading CB");
})
process.nextTick(()=>console.log("process click"))
console.log("Last line of the file.");

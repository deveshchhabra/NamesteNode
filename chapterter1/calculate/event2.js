const fs=require("fs");
const a=100;
setImmediate(()=>console.log("setImmediate"))
Promise.resolve("promise").then(console.log)
fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB");
})
setTimeout(()=>console.log("Timer Experied"),0);
process.nextTick(()=>console.log("process click"))
function printA(){
    console.log("a=",a);
}
printA();
console.log("Last line of the file.");
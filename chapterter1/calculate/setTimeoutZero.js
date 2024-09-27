console.log("Hello World")
var a=1078698;var b=20986;
setTimeout(()=>{
    console.log("Call me At instant")
},0);

setTimeout(()=>{
    console.log("Call me After 3seconds")
},3000);

let multiplyfunction=()=>{
    let result=a*b;
    return result;
}
var c=multiplyfunction();
console.log("Multiplyfuction is:",c)
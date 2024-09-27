console.log("Hello World")
const https=require("https");
const fs=require("fs");
var a=1078698;
var b=20986;
https.get("https://dummyjson.com/products/1",
    (res)=>{
        console.log("Fetch SucessFully");
});
setTimeout(()=>{
    console.log("SetTimeout After 5millisecond")
},5000)
fs.readFile("./file.txt","utf-8",
    (err ,data)=>{
        console.log("File Data",data);
    }
)
fs.readFileSync("./file.txt","utf-8");
console.log("File Data should come then i executes the next line")

//This Function will block the main thread
function multplyfn(x,y){
    const r=x*y;
    return r;
}
var c=multplyfn(a,b)
console.log(c)
//output c:=22637556;
//FileData:SHYAM BABA KI JAI
//Fetch SuccessFully
//SetTimeout After 5millisecond
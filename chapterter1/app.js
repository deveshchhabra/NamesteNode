
// function(){
//     // /..ALL THE CODE OF THE MODULE  INDSIDE THE FUNCTION
// (IIFE)
// }
// (function(module,require){
//     require("./anypath")
//         //ALL THE CODE INSIDE THE MODULE RUNS INSIDE HERE
// //         function calculateMul(a,b){
// //             const mul=a*b
// //             console.log('mul=',mul)
// //         }
// module.exports={calculateMul};
    
// })(module.exports={});

// (IIFE) ->immediately invoked function expression 














require("./xyz.js")//one module into another

// const {calculateSum}=require("./calculate/sum.js")//one module into another
// const {calculateMul}=require("./calculate/multiply.js")//one module into another
const {calculateSum,calculateMul}=require("./calculate")
const data=require("./data.json");
// import {calculateSum} from "./sum.js"
var name="Nameste Node JS";
// console.log(JSON.stringify(data));
console.log(data)

var a=10;
var b=20;
var x=10;
calculateSum(a,b);
calculateMul(a,b);
console.log(x)
// console.log(a+b);
// console.log(global);
// console.log(globalThis===global)

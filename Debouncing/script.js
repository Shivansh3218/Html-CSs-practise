// let counter =()=>{
//     console.log("data fetching")
//     document.querySelector("p").innerHTML = document.querySelector("input").value
// }
// let debounce = (counter,d)=>{
// let timer
// return (...args)=>{
//   if(timer) clearTimeout(timer)
//   setTimeout(()=>{
// counter(...args)
//   },d)
// }
// } 
// let result = debounce(counter,2000)
// document.querySelector("input").addEventListener("input",result)



// let x= 0
//  function count(fn ,delay){
//     return function(){
//         x+1
//        document.querySelector(".button").style.backgroundColor="blue"; 
//      document.querySelector(".text").innerHTML = x
//         setTimeout(()=>{
           
//             fn()
//         },delay)
//     }
//  }
//  const newFun = count(()=>{
//     document.querySelector(".button").style.backgroundColor="red"; 
// console.log("throttling")
//  },2000)


// ===================================

// function click(){
//     document.getElementById("myId").disabled=false;
//     console.log("User Clicking")
// }

// const throttle=(fn,d)=>{
//     return function(...args){
//         document.getElementById("myId").disabled=true;
//         setTimeout(() => {
//             fn(...args);
//         }, d);
//     }
// }

// const result=throttle(click,1000)

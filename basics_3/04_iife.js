// Immediately Invoked function expression (IIFE)

// function welcome(){
//     console.log(`DB Connected`)
// }
// welcome()

//using iife
(function welcome(){
    console.log(`DB Connected`);
})();   // ";" is used to end the invoked function, function itself doesnot know when to end

((num1)=> (console.log(num1*num1)))(5);  //function for square of a number
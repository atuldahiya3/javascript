const email=[]

if (email){
    console.log("email available");
} else{
    console.log("email not available");
}

//falsy values

// false, 0, -0, "", BigInt 0n, null, undefined, Nan 

//rest all are truthy values

//truthy values

//'false', "0", " ", [], {}, function(){} 


//Nullish Coalescing operator (??): Null Undefined

let val1;
val1= 5 ?? 10
val1= null ?? 10        // assigns second value if first is not suitable
val1= undefined ?? 15 ?? 20
console.log(val1);

//terniary operator
// condition ? true : false

const price=75
price >=80 ? console.log("expensive") : console.log("in budget");
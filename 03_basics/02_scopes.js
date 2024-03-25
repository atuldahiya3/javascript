let a= 100
var b=20

if (true){
    let a=10                    //local scope
    console.log("Inner:",a);
    var b=30
    console.log("inner var:",b);
}

console.log(a);                 //global scope
console.log(b);                 //var remains same for global and local scope


function one(){
    const username="atul"
    
    function two(){
        const password="123abc"         
        console.log(username);              //inner function can access outside variables
    }
    // console.log(password);               //inner function variables cant be accessed outside

    two()
}

one()

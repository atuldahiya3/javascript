function loginUserMessage(username="user"){
    if (!username){
        console.log("please enter username");
        return
    }
    return (`${username} just logged in`)
}

console.log(loginUserMessage("Atul"));

function addCartValue(...num1){
    return num1
}

console.log(addCartValue(100,200,300,2001,212));


const user={
    username:"Atul",
    age:21
}

function handleObject(anyObject){
    console.log(`Name is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user)
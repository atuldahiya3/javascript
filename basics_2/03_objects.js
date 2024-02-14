//Objects
//Objects.create -> this method is by constructor, created singleton

//Object Literals

const mySym=Symbol("key1")

const JsUser={
    name: "Atul Dahiya",
    [mySym]:"myKey",
    age:21,
    location:"Delhi",
    "login days":["saturday,sunday"]
}

console.log(JsUser.name);
console.log(JsUser["login days"]);  //this is a good way to access object using square notation
console.log(JsUser[mySym]);

JsUser['location']="Sonipat"
console.log(JsUser['location']);

// Object.freeze(JsUser) //it will lock the object and we cannot make further changes in values
// JsUser['age']=22
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("welcome Mr.");
}

console.log(JsUser.greeting());
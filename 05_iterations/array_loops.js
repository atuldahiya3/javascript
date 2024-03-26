// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting='Welcome to MDU'
for (const greet of greeting) {
    console.log(greet);
}


const map =new Map()
map.set('In','INDIA')
map.set('HR','Haryana')

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":-",value);
}


//for of doesnot work on objects

//for of

const myObj={
    a:'atul',
    d:'dahiya'
}

for (const key in myObj){
    console.log(key);
    console.log(myObj[key]);
}

//for each

const coding=['js','java','python','cpp']

coding.forEach(element => {
    console.log(element);
});

const myCoding=[
    {languageName:"js",
    use:"web development"},
    {languageName:"python",
    use:"ML"}
    
]

myCoding.forEach((item)=>{
    console.log(item.use)
})
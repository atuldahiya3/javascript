//Arrays

const myArray=[1,2,3,"Atul",true]
console.log(myArray);

const myArray2=new Array(10,20,30)
console.log(myArray2[myArray2.length-1]);

const myArray2D= [[1,2,3],[3,2,4]]
console.log(myArray2D[1][2]);
myArray2D.push(1)
console.log(myArray2D);
myArray2D.pop()
console.log(myArray2D);

myArray.unshift(10) //add element at start of array
myArray.shift() //removes element from starting of array

console.log(myArray.includes(1));
console.log(myArray.indexOf(2));

const newArray= myArray.join()      //returns string
console.log(myArray);
console.log(newArray);              //string



//Slice, Splice

const myN1=[1,2,3,4,5]
console.log("A",myN1);
const myN11=myN1.slice(1,3)
console.log("B",myN1);
console.log(myN11);

const myN12=myN1.splice(1,3)        //splice took out elements from orignal array inluding range
console.log("C",myN1);
console.log(myN12);



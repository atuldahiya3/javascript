const num=100
console.log(num);

const num2= new Number(400)
console.log(num2);
console.log(num2.toString());
console.log(num2.toFixed(2));

const num3=23.8992
console.log(num3.toPrecision(4));

const hundreds=1499900
console.log(hundreds.toLocaleString('en-IN'));


//--------------------MATHS---------------------
console.log(Math);
console.log(Math.abs(-444));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //chosses up-value
console.log(Math.floor(4.8));//chooses lower-value

//Math.max(Array); Math.min(Array)

console.log((Math.random()*10) + 1);

//printing randon number between a and b
const a=10
const b=20

console.log(Math.floor(Math.random()*(b-a+1))+a);


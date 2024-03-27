const nums=[1,2,3,4,5,6,7,8,9,10]

const newNums=nums.filter( (num)=> num>4 )

console.log(newNums);

const newNums1=[]
nums.forEach((num)=>{
    if (num>4){
        newNums1.push(num)
    }
})
console.log(newNums1);   

const cars=[
    {name:"swift", engine:1.2},
    {name:"vitara", engine:1.5},
    {name:"alto", engine:1.0},
    {name:"i10", engine:1.2},
    {name:"brezza", engine:1.5},
    {name:"creta", engine:1.5}
]

const selected_cars= cars.filter( (car)=> car.engine===1.2)

console.log(selected_cars);
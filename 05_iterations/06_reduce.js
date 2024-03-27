const myNums=[1,2,3,4]

const myTotal=myNums.reduce((acc,currVal)=>{
    console.log(`acc:${acc}, currval:${currVal}`);
    return acc+currVal
},0)

console.log(myTotal);


const shoppingCart=[
    {
        item:"phone",
        price:29990
    },{
        item:"game",
        price:1499
    },{
        item:"book",
        price:299
    }
]

const Bill=shoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(Bill);
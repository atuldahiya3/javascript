// for loop

for (let i = 0; i < 10; i++) {
    if(i%2==0){
        console.log("multiple of 2");
        continue // ignores a iteration
    }
    console.log(i);
    if(i==5){
        console.log("found multiple of 5");
        break
    }
    
}
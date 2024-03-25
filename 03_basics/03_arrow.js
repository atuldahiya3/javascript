const login={
    username:'Atul',
    price:100,

    welcomeMessage: function(){
        console.log(`${this.username} , just logged in`);   //this.username takes the value of variable in current context
        console.log(this);  // this checks value of variables in current
    }
}

login.welcomeMessage()
login.username="Dahiya"
login.welcomeMessage()

console.log(this);

//arrow functions

const add_num=(num1,num2)=>{
    return (num1+num2);         //explicit return
}

//same function using implicit return
const add_num_implicit=(num1,num2)=> (num1+num2);

console.log(add_num(1,3)); 

console.log(add_num_implicit(3,4));

let score= "33abc"  //initially it is string datatype, sometimes we dont know the datatype of a varibale

// console.log(typeof(score));

let valueInNumber=Number(score)

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
"true"=> 1; "false"=> 0
*/

let isLoggedIn="33asdc";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
1=> true; 0=> false; for any other integer=> true
"string"=> true; ""=> false

*/
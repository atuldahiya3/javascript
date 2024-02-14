const maruti_models=['lxi','vxi','zxi']
const hyundai_models=['ex','sx','turbo']

// maruti_models.push(hyundai_models)  //it considers hyundai_models array as a single element
// console.log(maruti_models);

// maruti_models.pop()

// const all_models=maruti_models.concat(hyundai_models)
// console.log(all_models);

const all_new_models=[...maruti_models,...hyundai_models]   //"..."separates all the elements of array or it is also called as spread
console.log(all_new_models);

const another_array=[1,2,3,[4,5,6,[8,2]]]
const simplified_array=another_array.flat(Infinity)
console.log(simplified_array);

console.log(Array.isArray("Atul"));
console.log(Array.from("Atul"));

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));

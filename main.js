// const firstName = 'zoe';
// const lastName = 'Ames';
// console.log(firstName + ' ' + lastName);

 const namePrinter = (firstName, lastName) => {
    console.log(`${firstName}  ${lastName}`);
 };
namePrinter('ZOE','AMES');
namePrinter('MARK','OKAFOR');
namePrinter('AMBER','ROSE');

const nuggetizer = (animal) =>{
    return `processed ${animal}`;
};
console.log(nuggetizer('pig'));

const dogBreed = (input)=>{
    console.log(`My favorite dog breed is ${input}`);
};
dogBreed('Border collier');
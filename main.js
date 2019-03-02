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
    return `My favorite dog breed is ${input}`;
};
console.log(dogBreed('Border collier'));

const dogBreedDiv = document.getElementById('dog-breeds');
dogBreedDiv.innerHTML = dogBreed('pitbull');

const nuggetizerDiv = document.getElementById('nuggetizer');
nuggetizerDiv.innerHTML = nuggetizer('deer');
nuggetizerDiv.innerHTML += nuggetizer('cat');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};
printToDom('dog-breeds', dogBreed('lab'));
printToDom('nuggetizer','mmmmm');
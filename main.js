// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creates new instances of objects
const pAequorFactory = (number, array) => {
  return {
    specipmen: number,
    dna: array
  }
}

const firstSpecies = pAequorFactory(1, mockUpStrand());
console.log(firstSpecies)

/* 
1. add .mutate() to pAequorFactory
2. make it randomly select a base from the dna property array
    a) create a variable to store the array's length
    b) use this variable to create another variable that selects a random number from that length
3. use random number to pick a random DNA base from the dna array
4. create a new array
*/



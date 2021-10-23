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
    dna: array,
    mutate() {
      // Base DNA list
      const baseDNA = ['A', 'T', 'C', 'G'];
      
      // Randomly created DNA
      const createdDNA = this.dna;
      console.log('created DNA ' + createdDNA);

      // single DNA selected for mutation
      let rand = Math.floor(Math.random() * createdDNA.length);
      let mutatedDNA = this.dna[rand];
      
      // filtering out DNA base to be mutated from the list of four
      let leftOverDNA = baseDNA.filter(letter => letter !== mutatedDNA);
      
      // getting random number from from base DNA list
      let randomBase = Math.floor(Math.random() * (leftOverDNA.length));
      
      // Mutating DNA of randomly created species
      createdDNA.splice(rand, 1, leftOverDNA[randomBase]);
      return createdDNA
      
    }
  }
}

const newSpecies = pAequorFactory(1, mockUpStrand())
console.log(' ')
console.log(newSpecies.dna)
console.log(newSpecies.mutate());
console.log(newSpecies.mutate());



// const firstSpecies = pAequorFactory(1, mockUpStrand());
// console.log(firstSpecies)

/* 
////////1. add .mutate() to pAequorFactory

////////2. make it randomly select a base from the dna property array

    ///////a) create a variable to store the array's length
    ////////b) use this variable to create another variable that selects a random number from that length

///////3. use random number to pick a random DNA base from the dna array

//////4. create a variable to store the array of the four possible DNA bases

////////5. filter out the randomly selected dna base we got from the object from the array of four DNA bases.

6. now we randomly select a base from the 3 remaining bases and save it to a variable

7. replace 
*/



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
    specimenNum: number,
    dna: array,
    
    // Mutates the DNA of created species
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
      
    },

    // Method to compare different created species
    compareDNA(pAequor) {
      let counter = 0;
    
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          counter+= 1;
        }

      }
      let percentage = Math.floor((counter / 15) * 100);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`)
        
      },

      // Method to check for survivability
      willLikelySurvive() {
        let count = 0;
        for (let j = 0; j < this.dna.length; j++) {
          if (this.dna[j] === 'C' || this.dna[j] === 'G') {
            count+= 1;
          }
        }
        return count >= 9 ? true : false;
      }
  }
}

const humanMade = ['C', 'C', 'C', 'C', 'C', 'C', 'G', 'G', 'G', 'C', 'T', 'A', 'A', 'T', 'A'];
const test = pAequorFactory(3, humanMade)
const newSpecies = pAequorFactory(1, mockUpStrand())
let secondOne = pAequorFactory(2, mockUpStrand())
// console.log(secondOne.dna)
// // console.log(' ')
// console.log(newSpecies.dna)
// console.log(newSpecies.mutate());
// console.log(newSpecies.mutate());
newSpecies.compareDNA(secondOne)
console.log(test.willLikelySurvive())
console.log(newSpecies.willLikelySurvive())

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
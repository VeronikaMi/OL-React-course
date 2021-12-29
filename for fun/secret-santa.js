let people = ["Eka", "Inga", "Mariam", "Anano", "Daniel", "Aleko", "Veronika"];

const randomIndex = max => Math.floor(Math.random() * max);

const secretSanta = () => {
  let indexOfSanta = randomIndex(people.length);
  let indexOfReciever = randomIndex(people.length);

  while (indexOfSanta === indexOfReciever) {
    indexOfReciever = randomIndex(people.length);
  }

  console.log(`${people[indexOfSanta]} is ${people[indexOfReciever]}'s Secret Santa.`);
}

secretSanta();
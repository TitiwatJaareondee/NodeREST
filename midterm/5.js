function getBudgets(peopleArray) {
    if (peopleArray.length === 0) {
      return 0;
    }
  
    const totalBudget = peopleArray.reduce((acc, person) => {
      if (person.hasOwnProperty('budget') && typeof person.budget === 'number') {
        return acc + person.budget;
      } else {
        console.warn('Invalid budget for a person:', person);
        return acc;
      }
    }, 0);
  
    return totalBudget;
  }
  
  console.log(getBudgets([
    { name: "John", age: 21,  budget: 23000},
    { name: "Steve", age: 32,  budget: 40000},
    { name: "Martin", age: 16,  budget: 2700}
  ]));

  console.log(getBudgets([
    { name: "John", age: 21,  budget: 29000},
    { name: "Steve", age: 32,  budget: 32000},
    { name: "Martin", age: 16,  budget: 1600}
  ]));



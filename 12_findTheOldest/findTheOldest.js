const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {

    oldestAge = getAge(
      oldest.yearOfBirth,
      oldest.yearOfDeath);
    currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function(birth, death) {
  if (death == undefined) death = new Date().getFullYear();
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

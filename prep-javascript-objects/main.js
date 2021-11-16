var person = {
  firstName: 'Vickram',
  lastName: 'Kahlon',
  fullName: 'Vickram Kahlon',
  hobby: 'Hockey'
};
var fullName = (person.firstName + ' ' + person.lastName);
console.log(person);
console.log("The person's name is:", fullName);

person.job = 'Coder';
console.log("The person's job is:", person.job);

person.previousJob = 'Analyst';
console.log("The person's previous job was:", person.previousJob);

console.log(person);

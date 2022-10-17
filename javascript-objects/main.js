var student = {
  firstName: 'Aaron',
  lastName: 'Butnik',
  age: 33
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Building Inspector';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Subaru',
  model: 'Impreza WRX STI',
  year: '2007'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Miyamoto Musashi',
  type: 'Hamster'
};

delete pet.name;
delete pet.type;

console.log('the value of pet:', pet);

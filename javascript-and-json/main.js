var books = [
  {
    isbn: '9780385249492',
    title: 'Hyperion',
    author: 'Dan Simmons'
  },
  {
    isbn: '9780399128967',
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    isbn: '9780345317988',
    title: 'Foundation',
    author: 'Isaac Asimov'
  }
];

console.log('type of books:', typeof books);

console.log(JSON.stringify(books));
console.log('type of books after JSON.stringify:', typeof JSON.stringify(books));

var student = '{"id":"9158","name":"Robert"}';
console.log('type of student:', typeof student);

console.log(JSON.parse(student));
console.log('type of student after JSON.parse:', typeof JSON.parse(student));

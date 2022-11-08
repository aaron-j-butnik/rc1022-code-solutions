function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor();
console.log('value of anExampleConstructor:', anExampleConstructor);

var isInstance = anExampleConstructor instanceof ExampleConstructor;
console.log(isInstance);

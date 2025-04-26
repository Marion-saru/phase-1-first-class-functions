let name = "Marion Maghanga";
const greeting = (name) => console.log(`Hello ${name}! Welcome back.`);

function receivesAFunction(greeting){
    greeting(name);
}
receivesAFunction(greeting);

function returnsAnAnonymousFunction(){
    return () => console.log("Hello!");
}
returnsAnAnonymousFunction()();

function greet() {
    console.log("Hello!");
}

function returnsANamedFunction() {
    return greet;
}
returnsANamedFunction()();
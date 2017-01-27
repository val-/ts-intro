interface Person {
    firstName: string,
    lastName: string,
    age: number
}

function greeter(person: Person) {
    return `Hello, ${person.firstName}!!!`;
}

var user = {
    firstName: 'Valentin',
    lastName: 'Agafonov',
    age: 28
};

let a = [1,2];
let b = [3,4];

let c = [0, ...a, ...b, 5];




document.getElementById('app').innerHTML = greeter(user);

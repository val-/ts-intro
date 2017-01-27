function greeter(person) {
    return "Hello, " + person.firstName + "!!!";
}
var user = {
    firstName: 'Valentin',
    lastName: 'Agafonov',
    age: 28
};
var a = [1, 2];
var b = [3, 4];
var c = [0].concat(a, b, [5]);
document.getElementById('app').innerHTML = greeter(user);

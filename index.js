// console.log('in sandbox')

//SPREAD OPERATOR

//pour les tableaux
// const arr1 = [2, 4, 7]
// const arr2 = [3, 5, 8]

// const newArr = [...arr1, ...arr2, "hello", "world"]

// console.log(newArr);

// pour les objets

// const amir = {
//     name: 'Amir',
//     age: 36
// }

// const amirWithEmail = {
//     ...amir,
//     email: 'amir@example.com'


// }

// console.log(amirWithEmail)

//Exercice 1

// const arr1 = ["Bonjour", "tout", "le monde"]
// const arr2 = ["Salut", "à tout"]
// const arr3 = ["Je m'appelle", "mon nom est"]
// const arr4 = ["Céline", "Chignon"]
// const arr5 = ["Antoine", "Dupont"]

//à l'aide du spread operator, creer un seul et unique tableau, qui sera ensuite parcouru pour écrire les phrases suivantes:

//Bonjour tout le monde je m'apelle Antoine Dupont 
//Salut à tous, mon nom est PCéline, Chignon

// const slt = {
//     [...arr1, ...arr3, ..., arr5]
// }

// const sltt = {
//     [...arr2, ...arr3, ...arr4]
// }



// console.log(slt);

/////

const arr1 = ["Bonjour", "tout", "le monde"];
const arr2 = ["Salut", "à tous"];
const arr3 = ["Je m'appelle", "mon nom est"];
const arr4 = ["Céline", "Chignon"];
const arr5 = ["Antoine", "Dupont"];

const slt = [...arr1, arr3[0], ...arr5];
const sltt = [...arr2, arr3[1], ...arr4];

// console.log(slt.join(" ") + ".");
// console.log(sltt.join(" ") + ".");

// CONFUSION AVEC LE REST PARAMETER

// function sum(...params) {
//     let total = 0

//     return params
// }

// console.log(sum(4, 5, 7))

function sum(...params) {
    let total = 0;
    for (let i = 0; i < params.length; i++) {
        total += params[i];
    }
    return total;
}

console.log(sum(4, 5, 7));

////REDUCE

function sum(...params) {
    return params.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(4, 5, 7));


////FOREACH

function sum(...params) {
    let total = 0;
    params.forEach((element) => {
        total += element;
    });
    return total;
}

console.log(sum(4, 5, 7));





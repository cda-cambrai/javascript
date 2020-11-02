// 1. Grâce à la boucle for, écrire les nombres de 1 à 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('-------------------------');
// 2. Grâce à la boucle for, écrire les nombres de 10 à 2.
for (var i = 10; i >= 2; i--) {
    console.log(i);
}

console.log('-------------------------');
// 3. Grâce à la boucle for, afficher les nombres de 1 à 100 mais uniquement les nombres pairs.
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) { // Si i est pair donc divisible par 2 (pas de reste)
        console.log(i);
    }
}

// 4. Grâce au while, demandez à l'utilisateur s'il veut continuer sur le site, il doit répondre "oui", "non", "o" ou "n". Tant qu'il ne répond pas une de ces valeurs, lui reposer la question.

var answer = prompt('Veux-tu continuer sur le site ?');

while (answer !== 'oui' && answer !== 'non' && answer !== 'o' && answer !== 'n') {
    answer = prompt('Veux-tu continuer sur le site ?');
}

if (answer === 'oui' || answer === 'o') {
    console.log('On entre sur le site');
} else {
    console.log('On sort du site');
}

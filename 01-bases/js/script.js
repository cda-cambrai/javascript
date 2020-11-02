// Je déclare une variable contenant un nombre
var age = 28;
console.log(age);

// Demander l'âge à l'utilisateur ?
age = prompt('Quel est ton âge ?');

// Affiche le résultat pour vérifier
// le contenu d'une variable
console.log(age);

// La concaténation
var prenom = 'Matthieu';

// On peut rassembler des chaines de caractères
// entre emmes
console.log(prenom + ' a ' + age + ' ans.');

// Comment faire avec les quotes dans un texte ?
console.log('l\'école');
console.log("l'école");
console.log('je vais à "l\'école"');
console.log("je vais à \"l'école\"");

// Les tableaux
var notes = [12, 18, 17, 'Toto'];
console.log(notes); // Affiche le tableau complet

var moyenne = (notes[0] + notes[1] + notes[2]) / (notes.length - 1);
// .length renvoie le nombre d'éléments dans un tableau (taille du tableau)
console.log(moyenne);

// Les objets
var personn = {
    nom: 'Mota',
    prenom: 'Matthieu',
    birthday: [18, 11, 1991]
};

// Afficher le nom
console.log(personn.nom); // personn['nom']
console.log(personn); // Affiche tout l'objet
console.log(personn.birthday[2]); // Affiche 1991

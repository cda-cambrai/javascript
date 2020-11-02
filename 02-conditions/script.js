// 1. Reprendre le script de l'âge.
var age = prompt('Quel est ton âge ?');
// Si l'utilisateur a moins de 13 ans : Afficher "Interdit"
if (age < 13) {
    alert('Interdit, tu es trop jeune.');
} else if (age >= 13 && age <= 17) {
    // Si l'utilisateur a entre 13 et 17 ans : Afficher "Bientôt"
    alert('Tu es bientôt majeur (dans '+(18 - age)+' ans).');
} else {
    // Si l'utilisateur a 18 ans ou plus : Afficher "Autoriser"
    alert('Tu es autorisé.');
}

/*
2. Imaginons un frigo (qui pourrait être un objet JS). Mon frigo contient 3 tomates, 4 oeufs, 1 pain, 2 jambons, 1 poulet et 1 fromage.
Ce soir, je veux manger quelque chose. Je peux faire 1 sandwich
SI j'ai un 1 pain ET 1 jambon ET une tomate OU un fromage. Attention, dans cette condition il faut absolument un pain ET un jambon et soit une tomate OU un fromage.
SINON, SI j'ai un poulet, je peux manger le poulet.
SINON,
Si j'ai 3 oeufs, je peux manger une omelette
SINON je mange des chips.
*/

var frigo = {
    tomate: 3,
    oeuf: 4,
    pain: 0,
    jambon: 2,
    poulet: 1,
    fromage: 1
};

console.log(frigo);
alert(frigo);
if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomate >= 1 || frigo.fromage >= 1)) {
    console.log('Je peux faire un sandwich');
} else if (frigo.poulet >= 1) {
    console.log('Je mange le poulet');
} else if (frigo.oeuf >= 3) {
    console.log('Je mange une omelette');
} else {
    console.log('Je mange des chips');
}

# TP La liste de Fiorella

Nous allons créer une liste de Noël pour Fiorella. On aura d'abord une liste de cadeaux (en HTML) :

- Sophie la girafe
- Trotteur
- Livre
- Petit ours brun
- Doudou
- Léon l'ourson
- Piano
- Cubes et sphères

1. Fiorella doit pouvoir choisir (click) uniquement 5 cadeaux (pas 10). (Tableau ? this ?)
2. Quand Fiorella aura choisi un cadeau, cet élément de la liste sera barré. (Une classe CSS ?)
3. Fiorella peut changer d'avis et "déselectionner" un cadeau. (Tableau pop ou splice ?)
4. Dès qu'elle aura choisi 5 cadeaux, on affichera un message "Attends ton anniversaire" sur la page.

BONUS. Afficher la liste de Fiorella au fur et à mesure dans une 2ème liste (Aide du formateur)
BONUS. Afficher une phrase "Fiorella a choisi 2 cadeaux. Il en reste 3."

Vous êtes libres d'ajouter des variantes au TP...

Durée: Entre 1 et 2 heures

# TP Puzzle / Taquin

On va essayer de créer un Puzzle (numéros) en JavaScript / jQuery.
http://www.artbylogic.com/puzzles/numSlider/numberShuffle.htm

On devra utiliser Github. Voici la liste des fonctionnalités à implémenter :

- Créer l'apparence du jeu avec des cases. On va commencer par un 4 par 4. Il faut donc avoir 15 carrés avec une zone vide.
- Pouvoir cliquer sur un carré et le positionner à la place de la zone vide.
  Chaque carré doit être positionné (relative ou absolute) par rapport à la zone complète du jeu
- Mélanger le jeu aléatoirement à chaque rafraichissement
- Autoriser uniquement le déplacement d'un carré s'il est à côté de la zone vide
- BONUS: Compter les déplacements (en temps réel)
- BONUS: Ajouter un chronomètre et détecter la fin de la partie
- BIG BONUS: Adapter le jeu pour que cela fonctionne avec une image (à voir si on peut découper une image en ligne)
  https://postcron.com/image-splitter/editor/en/upload-image

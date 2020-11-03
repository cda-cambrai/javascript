// Changer le background du h1 en jQuery
$('h1').text('Good Bye JavaScript'); // En js : document.getElementsByTagName('h1')[0].textContent = 'Good Bye';
// Changer la couleur des p
$('p').css('color', 'blue');
// CSS avec plusieurs propriétés
$('p').css({
    'background-color': 'lightgray',
    fontSize: '30px',
});
// Sélectionner le premier p
$('p').first().css('color', 'red');

// Cacher un élément
$('.container > #toto').hide();
$('.container > #toto').fadeOut(); /* Cache l'élément avec une transition */
// Afficher un élément
$('.container > #toto').show();
$('.container > #toto').fadeIn();

// Chercher tous les p dans .container
$('.container').find('p');

$('#toto').parent(); // Sélectionne la div .container
$('#toto').parent().children(); // Sélectionne les enfants de la div .container
$('#toto').parent().children('h1').next(); // Sélectionne l'élément suivant le h1 donc #toto
$('#toto').prev(); // Sélectionne le h1
$('p').eq(1); // Sélectionne le second p

// Créer le carré
$('.square').css({
    'background-color': 'red',
    width: 100, // jQuery va deviner 100px
    height: 100,
    position: 'absolute',
    boxShadow: '0 0 4px black',
});

// Animation sur un carré
$('.square').animate({
    left: '+=1500',
}, {
    duration: 2000,
    // Exécute une fonction quand l'animation est terminée
    complete: function () {
        alert('Le carré a gagné.');
    }
});

// Au clic sur un bouton, on remet le carré à sa place
$('button').click(function () {
    $('.square').animate({
        left: '-=1500',
    }, 2000);
});

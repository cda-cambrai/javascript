$('.on-off').css({
    color: '#000',
    'background-color': '#d3d3d3',
    'box-shadow': '0 0 20px #000',
    //outline: 0, border: 0,
});

/* Première version */
$('on-off').click(function () {

    if ($('.on-off').text() === 'On') {

        $('.on-off').text('Off');

        $('.on-off').css({
            color: '#d3d3d3',
            'background-color': '#a9a9a9',
            'box-shadow': 'none',
            //outline: 0, border: 0,
        });

    } else {

        $('.on-off').text('On');

        $('.on-off').css({
            color: '#000',
            'background-color': '#d3d3d3',
            'box-shadow': '0 0 20px #000',
            //outline: 0, border: 0,
        });

    }

});

/* Seconde version */
var state = true; // Etat du bouton ouvert
$('.on-off').click(function () {
    // Ajoute la classe si elle n'est pas présente sur l'élément
    // Supprime la classe si elle est présente sur l'élément
    // $('.on-off').toggleClass('off');

    if (state) {
        $('.on-off').addClass('off').removeClass('on');
        $('.on-off').text('Off');
        //state = false;
    } else {
        $('.on-off').addClass('on').removeClass('off');
        $('.on-off').text('On');
        //state = true;
    }

    // Permet de passer state à false si il est true et vice-versa
    state = !state;
});

// 2ème exercice : Texte déroulant
// $('p').hide(); // Je cache le texte

var isDisplay = false; // Le texte est caché
$('.slide').click(function () {
    // $('p').slideToggle();

    // On ne peut utiliser que des valeurs numériques pour le animate
    // display, visibility ou background-color ne fonctionnent pas.
    if (isDisplay) { // Si le texte est affiché
        $('p').animate({
            opacity: 0
        }, 500);
        isDisplay = false;
    } else {
        $('p').animate({
            opacity: 1
        }, 500);
        isDisplay = true;
    }
});

// 3ème exercice : Le texte 

var size = parseInt($('.text-size').css('font-size')) / 16;
$('.text-size').click(function () {
    if (size === 1) {
        size = 1.5;
    } else {
        size = 1;
    }

    $('.text-size').css('font-size', size+'em');
});

// 4ème exercice : Le rectangle

$('.rectangle').css({
    width: 100,
    height: 10,
    'background-color': '#ff0000'
});

var height = 10;
$('#bouton1').click(function () {
    height += 10;

    if ($('.rectangle').height() >= 100) {
        height = 10;
        // Le .off supprime la function du click
        // $('#bouton1').off('click');
    }

    $('.rectangle').css('height', height);
});

$('#bouton2').click(function () {
    $('.rectangle').css('background-color', 'green');
});

$('#bouton3').click(function () {
    $('.rectangle').css('background-color', '#ff0000');
});

$('#bouton4').click(function () {
    $('.rectangle').fadeOut();
});

$('#bouton5').click(function () {
    $('.rectangle').fadeIn();
});

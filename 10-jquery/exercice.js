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

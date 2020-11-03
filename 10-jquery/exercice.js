$('.on-off').css({
    color: '#000',
    'background-color': '#d3d3d3',
    'box-shadow': '0 0 20px #000',
    //outline: 0, border: 0,
});

$('.on-off').click(function () {

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

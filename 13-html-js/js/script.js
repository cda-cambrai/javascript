var follow = $('#follow');

follow.click(function () {
    if (follow.text() === 'Follow') {
        follow.text('Unfollow');
        follow.addClass('btn-danger');
        follow.removeClass('btn-primary');
    } else {
        follow.text('Follow');
        follow.removeClass('btn-danger');
        follow.addClass('btn-primary');
    }
});

var likes = 0;
$('.fa-heart').click(function () {
    $('.fa-heart').toggleClass('far fas');
    likes++;
    $('#likes').text(likes);
});

$('.fa-comment').click(function () {
    $('.fa-comment').toggleClass('far fas');
    // .toggle() fait soit un hide() soit un show()
    $('#comments').toggle();
});

$('#comments button').click(function () {
    // Ici je dois ajouter le message
    var message = $('#comments textarea').val();
    console.log(message);

    // Transformer le premier mot du message en gras
    // Hello Fiorella => <strong>Hello</strong> Fiorella
    // Rappel :
    // - "Hello Fiorella".split(' ') => ["Hello", "Fiorella"]
    // - ['<h1>Hello</h1>', 'Fiorella'].join(' ') => "<h1>Hello</h1> Fiorella"
    var words = message.split(' '); // On a notre tableau
    // On remplace "Hello" par "<strong>Hello</strong>"
    words[0] = '<strong>' + words[0] + '</strong>';
    // Retransformer le tableau en chaine
    message = words.join(' ');

    var paragraph = $('<p></p>'); // Je crée mon p
    paragraph.html(message);

    // J'ajoute mon p dans la div
    $('#messages').append(paragraph);

    // Vider le textarea
    $('#comments textarea').val('');
});

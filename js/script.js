$(document).ready(function() {

    var phrases = [
        'Coding is a way of life...',
        'Talk is cheap. Show me the code!!!',
        'Good design adds value faster than it adds cost.',
        'It is easier to port a shell than a shell script.',
        "I don't care if it works on your machine! We are not shipping your machine!",
        'To iterate is human, to recurse divine...'
    ];
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#bubble'),
        newText: phrases[index++],
        letterSpeed: 70,
        repeat: Infinity,
        timeBetweenRepeat: 1000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });




});

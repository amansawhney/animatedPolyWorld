/**
 * Created by amansawhney on 7/12/17.
 */

var spaceObject = anime({
    targets: '.spaceObject',
    translateY: '20vh',
    duration: 1500,
    delay: 2250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutCubic'
});

var path = anime.path('#motionPath path');

var motionPath = anime({
    targets: '#motionPath .el',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'easeOutCubic',
    delay: 25000,
    duration: 5000,
    direction: 'reverse',
    loop: true
});


var duration = anime({
    targets: '#dummy .el',
    translateX: 2100,
    delay: 10000,
    duration: 9000,
    easing: 'linear',
    direction: 'normal',
    loop: true,
    rotate: 540

});




// var bird = anime({
//     targets: '#dummy',
//     translateX: 100%,
//     rotate: '1turn'
// });
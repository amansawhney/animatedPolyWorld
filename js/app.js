/**
 * Created by amansawhney on 7/12/17.
 */

var bouncingBall = anime({
    targets: '.spaceObject',
    translateY: '20vh',
    duration: 1500,
    delay: 2400,
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
    delay: 20000,
    duration: 4500,
    direction: 'reverse',
    loop: true
});


var duration = anime({
    targets: '#dummy .el',
    translateX: 1700,
    delay: 10000,
    duration: 9000,
    easing: 'linear',
    direction: 'alternate',
    loop: true,
    rotate: 540

});


// var bird = anime({
//     targets: '#dummy',
//     translateX: 100%,
//     rotate: '1turn'
// });
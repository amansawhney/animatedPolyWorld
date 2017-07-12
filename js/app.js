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
    easing: 'linear',
    duration: 2000,
    direction: 'reverse',
    loop: true
});
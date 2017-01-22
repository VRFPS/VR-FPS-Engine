// Import aframe
require('aframe');

var gameScore = 0;

require('hammerjs');
require('aframe-randomizer-components');
require('aframe-animation-component');
require('aframe-particle-system-component')
// require('aframe-always-fullscreen-component');
// require('platform');
// var physics = require('aframe-physics-system');
// physics.registerAll();

// var extras = require('aframe-extras');
// extras.registerAll();
// AFRAME.registerComponent('physics', extras.misc)

require('./components/mobileMove');
require('./components/entity-generator');
require('./components/click-listener');
require('./components/projectile');
require('./components/spawner');
// var scene = document.getElementById('scene')
// var mc = new Hammer.Manager(window)
// // var Tap = new Hammer.Tap()
// mc.add( new Hammer.Tap({ event: 'tap', taps: '2' }))

// mc.on('tap', function() {
//   const player = document.getElementById('player')
//   player.emit('fire')
// })



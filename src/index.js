// Import aframe
require('aframe');

// import game state
// require('./gameState');

// Import entity generator
require('aframe-entity-generator-component');
require('aframe-randomizer-components');
require('./enemies');

// AFRAME.registerComponent('entity-generator', {
//   schema: {
//     mixin: {default: ''},
//     num: {default: 10}
//   },

//   init: function () {
//     var data = this.data;

//     // Create entities with supplied mixin.
//     for (var i = 0; i < data.num; i++) {
//       var entity = document.createElement('a-entity');
//       entity.setAttribute('mixin', data.mixin);
//       this.el.appendChild(entity);
//     }
//   }
// });

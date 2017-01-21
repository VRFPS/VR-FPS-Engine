// AFRAME.registerComponent('collider', {
//   schema: {
//     target: { default: '' }
//   },
//   /**
//    * Calculate targets.
//    */
//   init: function () {
//     var targetEls = document.querySelectorAll('.enemy');
//     this.targets = [];
//     for (var i = 0; i < targetEls.length; i++) {
//       this.targets.push(targetEls[i].object3D);
//     }
//     this.el.object3D.updateMatrixWorld();
//   },
//   /**
//    * Check for collisions (for cylinder).
//    */
//   tick: function (t) {
//     var collisionResults;
//     var directionVector;
//     var el = this.el;
//     var sceneEl = el.sceneEl;
//     var mesh = el.getObject3D('mesh');
//     var object3D = el.object3D;
//     var raycaster;
//     var bottomVertex =  new THREE.Vector3(0,1,0)
//     var topVertex =  new THREE.Vector3(2,1,2)
//     // Calculate absolute positions of start and end of entity.
//     bottomVertex.applyMatrix4(object3D.matrixWorld);
//     topVertex.applyMatrix4(object3D.matrixWorld);
//     // Direction vector from start to end of entity.
//     directionVector = topVertex.clone().sub(bottomVertex).normalize();
//     // Raycast for collision.
//     raycaster = new THREE.Raycaster(bottomVertex, directionVector, 1);
//     collisionResults = raycaster.intersectObjects(this.targets, true);
//     collisionResults.forEach(function (target) {
//       // Tell collided entity about the collision.
//       target.object.el.emit('raycaster-intersected', {target: el});
//     });
//   }
// });

// AFRAME.registerComponent('collider-check', {
//   dependencies: ['raycaster'],
//   init: function () {
//     this.el.addEventListener('raycaster-intersected', function () {
//       console.log('Player hit something!');
//     });
//   }
// });

AFRAME.registerComponent('collider-check', {
    schema: {

    },
    init: function () {

    },// this.el.object3D.updateMatrixWorld();

});

AFRAME.registerComponent('projectile', {
  schema: {
    speed: { default: -0.4 },
    target: { default: '.enemy' }
  },
  init: function () {
      let enemies = document.querySelectorAll('.enemy')
      this.targets = [];
      this.ticks = 0;
      for (var i = 0; i < enemies.length; i++) {
        this.targets.push(enemies[i]);
      }
      // console.log(this.targets)
      // console.log(this.el.object3D)
      // console.log(this.el.sceneEl.)
    },

  tick: function () {
    let intersect = (sphere, box) => {
      // get box closest point to sphere center by clamping
      var x = Math.max(box.minX, Math.min(sphere.x, box.maxX));
      var y = Math.max(box.minY, Math.min(sphere.y, box.maxY));
      var z = Math.max(box.minZ, Math.min(sphere.z, box.maxZ));

      // this is the same as isPointInsideSphere
      var distance = Math.sqrt((x - sphere.x) * (x - sphere.x) +
                               (y - sphere.y) * (y - sphere.y) +
                               (z - sphere.z) * (z - sphere.z));
      return distance < 0.15;
    }

    let bullet = this.el;
    // console.log(el.object3D.position.length())
      if (bullet.object3D.position.length() > 100 && bullet.parentEl) bullet.parentNode.removeChild(bullet)
      else if(this.targets.length !== 0 && bullet.parentEl) {
        for (let i = 0; i < this.targets.length; i++ ) {
          let currentEnemy = this.targets[i].object3D
          let box = {
            minX: currentEnemy.position.x - 2,
            minY: currentEnemy.position.y - 2,
            minZ: currentEnemy.position.z - 2,
            maxX: currentEnemy.position.x + 2,
            maxY: currentEnemy.position.y + 2,
            maxZ: currentEnemy.position.z + 2
          }
          let sphere = bullet.object3D.translateY(this.data.speed).position
          // console.log(sphere)
          if(intersect(sphere, box)) {
            let target = this.targets[i];
            target.parentNode.removeChild(target)
            bullet.parentNode.removeChild(bullet)
            this.targets.splice(i, 1);
            return;
          }
        }
    }
    bullet.object3D.translateY(this.data.speed)
  }
});

// var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
//       var collisionResults = ray.intersectObjects( sceneEl.object3D.children, true );
//       collisionResults.forEach(hit);

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
        this.targets.push(enemies[i].object3D);
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

    let el = this.el;
    // console.log(el.object3D.position.length())
      if (el.object3D.position.length() > 38 && el.parentEl) el.parentNode.removeChild(el)
      else if(this.targets.length !== 0 && el.parentEl) {
      // for (let i = 0; i < this.targets.length; i++ ) {

      // }
      this.targets[0].position
      let box = {
        minX: this.targets[0].position.x - 2,
        minY: this.targets[0].position.y - 2,
        minZ: this.targets[0].position.z - 2,
        maxX: this.targets[0].position.x + 2,
        maxY: this.targets[0].position.y + 2,
        maxZ: this.targets[0].position.z + 2
      }
      let sphere = this.el.object3D.translateY(this.data.speed).position
      // console.log(sphere)
      if(intersect(sphere, box)) {
        let target = document.querySelector('.enemy');
        target.parentNode.removeChild(target)
        el.parentNode.removeChild(el)
        this.targets.shift();
      }
    }

    this.el.object3D.translateY(this.data.speed)
  }
});

// var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
//       var collisionResults = ray.intersectObjects( sceneEl.object3D.children, true );
//       collisionResults.forEach(hit);

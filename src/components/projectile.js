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
    },
  remove: function() {
    this.el.removeObject3D('projectile');
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
    if(this.targets[0] && el.parentEl) {
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
      if(intersect(sphere, box)) {
        let target = document.querySelector('.enemy');
        target.parentNode.removeChild(target)
        el.parentNode.removeChild(el)
      }
    }

  }
});

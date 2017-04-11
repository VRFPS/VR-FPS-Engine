AFRAME.registerComponent('spawner', {
  schema: {
    on: { default: 'click' },
    mixin: { default: '' },
  },
  /**
   * Add event listener.
   */
  update() {
    this.el.addEventListener(this.data.on, this.spawn.bind(this));
  },
  /**
   * Spawn new entity at entity's current position.
   */
  spawn() {
    const el = this.el;
    const entity = document.createElement('a-entity');
    const matrixWorld = el.object3D.matrixWorld;
    const position = new THREE.Vector3();
    const rotation = el.getAttribute('rotation');
    let entityRotation;
    position.setFromMatrixPosition(matrixWorld);
    entity.setAttribute('position', position);
    // Have the spawned entity face the same direction as the entity.
    // Allow the entity to further modify the inherited rotation.
    position.setFromMatrixPosition(matrixWorld);
    entity.setAttribute('position', position);
    entity.setAttribute('mixin', this.data.mixin);
    entity.addEventListener('loaded', () => {
      //changed getDeprecatedAttribute to getAttribute
      entityRotation = entity.getAttribute('rotation');
      entity.setAttribute('rotation', {
        x: entityRotation.x + rotation.x,
        y: entityRotation.y + rotation.y,
        z: entityRotation.z + rotation.z,
      });
    });
    el.sceneEl.appendChild(entity);
  }
});

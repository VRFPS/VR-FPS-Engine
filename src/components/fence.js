AFRAME.registerComponent('fence', {
  schema: {
    width: {
      type: 'number',
      default: 10,
    },
    depth: {
      type: 'number',
      default: 10,
    },
    x: {
      type: 'number',
      default: 0,
    },
    z: {
      type: 'number',
      default: 0,
    },
  },

  tick() {
    const width = this.data.width;
    const depth = this.data.depth;
    const x = this.data.x;
    const z = this.data.z;

    const minX = width / 2 + x;
    const maxX = -1 * width / 2 + x;

    const minZ = depth / 2 + z;
    const maxZ = -1 * depth / 2 + z;

    const position = this.el.getAttribute('position');

    position.x = Math.min(minX, position.x);
    position.x = Math.max(maxX, position.x);

    position.z = Math.min(minZ, position.z);
    position.z = Math.max(maxZ, position.z);

    this.el.setAttribute('position', position);
  },

});

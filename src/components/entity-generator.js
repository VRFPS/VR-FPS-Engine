AFRAME.registerComponent('entity-generator', {
  schema: {
    mixin: { default: '' },
    num: { default: 10 },
  },

  init() {
    const data = this.data;
    const randomNum = Math.random() * 15;

    for (let i = 0; i < randomNum; i++) {
      const entity = document.createElement('a-entity');
      entity.setAttribute('mixin', data.mixin);
      entity.setAttribute('class', 'enemy');
      this.el.appendChild(entity);
    }
  },

  tick() {
    const enemies = document.querySelectorAll('.enemy');
    if (enemies.length === 1) { this.init(); }
  },
});

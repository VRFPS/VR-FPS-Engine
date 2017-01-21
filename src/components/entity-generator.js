AFRAME.registerComponent('entity-generator', {
  schema: {
    mixin: {default: ''},
    num: {default: 1000}
  },

  init: function () {
    var data = this.data;

    // Create entities with supplied mixin.
    for (var i = 0; i < data.num; i++) {
      var entity = document.createElement('a-entity');
      entity.setAttribute('mixin', data.mixin);
      entity.setAttribute('class', 'enemy')

      this.el.appendChild(entity);
    }
  }
});

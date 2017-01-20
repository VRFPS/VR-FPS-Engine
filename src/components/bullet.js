
AFRAME.registerComponent('bullet', {
  schema: {
    mixin: {default: ''},
    num: {default: 5}
  },

  init: function () {
        var entity = document.createElement('a-sphere');
        entity.setAttribute('radius', '0.5');
        entity.setAttribute('radius', 'property: position; dur: 3000;delay: 2000 from: 2 2 5; to: 85 50 -20');

        this.el.appendChild(entity);
  }
});

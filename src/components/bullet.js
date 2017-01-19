
AFRAME.registerComponent('bullet', {
  schema: {
    mixin: {default: ''},
    num: {default: 5}
  },

  init: function () {
    // let f = () => {

    //   var data = this.data;
    //   for (var i = 0; i < data.num; i++) {
        var entity = document.createElement('a-entity');
        entity.setAttribute('mixin', data.mixin);
        this.el.appendChild(entity);
      // }
    // }
  }
});

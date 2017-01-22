AFRAME.registerComponent('fall', {
  schema: {
    speed: { default: -0.1 }
  },

  // init: function() {
  //   this.el.object3D.lookAt()
  // }

  tick: function() {

    this.el.object3D.translateY(this.data.speed)
  }
})

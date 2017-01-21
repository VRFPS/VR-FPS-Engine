AFRAME.registerComponent('click-listener', {
  init: function () {
    var el = this.el;
    window.addEventListener('keyup', function (evt) {
      if (evt.keyCode == 32 )
      el.emit('click');
    });
  }
});

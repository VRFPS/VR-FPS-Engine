AFRAME.registerComponent('click-listener', {
  init() {
    window.addEventListener('click', (evt) => {
      this.el.emit('click', null, false);
    });
  }
});

AFRAME.registerComponent('click-listener', {
  init() {
    const el = this.el;
    if (AFRAME.utils.device.isMobile()) {
     window.addEventListener('click', (evt) => {
       el.emit('click', null, false);
     });
    } else {
     window.addEventListener('click', (evt) => {
       el.emit('click', null, false);
     });
    }
  }
});

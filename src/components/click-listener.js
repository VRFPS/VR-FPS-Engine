AFRAME.registerComponent('click-listener', {
 init: function () {
   var el = this.el;

   if (AFRAME.utils.isMobile()) {
     window.addEventListener('click', function (evt) {
       el.emit('click', null, false)
     })
   } else {
     window.addEventListener('keyup', function (evt) {
       if (evt.keyCode == 32 )
       el.emit('click', null, false);
     });
   }
 }
});



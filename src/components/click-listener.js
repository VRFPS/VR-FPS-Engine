AFRAME.registerComponent('click-listener', {
 init: function () {
   var el = this.el;
   if (AFRAME.utils.device.isMobile()) {
     window.addEventListener('click', function (evt) {
       el.emit('click', null, false)
     })
   } else {
     window.addEventListener('click', function (evt) {
       // if (evt.keyCode == 32 )
        // document.getElementById('scene').onKeyDown('move')
       el.emit('click', null, false);
     });
   }
   console.log(this.el)
 }

});


AFRAME.registerComponent('mobileClick-listener', {
 init: function () {
   var el = this.el;
     window.addEventListener('mobileFire', function (evt) {
       el.emit('mobileFire', null, false)
     })

   console.log(this.el)
 }

});

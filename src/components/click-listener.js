AFRAME.registerComponent('click-listener', {
 init: function () {
   var el = this.el;
   if (AFRAME.utils.device.isMobile()) {
     window.addEventListener('fire', function (evt) {
       el.emit('fire', null, false)
     })

   } else {
     window.addEventListener('click', function (evt) {
      // console.log(evt)
      //  if (evt.keyCode == 86)
        el.emit('fire', null, false);
      })

     //  window.addEventListener('click', function (evt) {
     //    el.emit('fire', null, false)
     //   })

     //   window.remove

     // // });
   }
   console.log(this.el)
  }

});


// AFRAME.registerComponent('mobileClick-listener', {
//  init: function () {
//    var el = this.el;
//      window.addEventListener('mobileFire', function (evt) {
//        el.emit('mobileFire', null, false)
//      })

//    console.log(this.el)
//  }

// });

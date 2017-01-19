
AFRAME.registerComponent('entity-generator', {
  schema: {
    mixin: {default: ''},
    num: {default: 5}
  },

  init: function () {
    let f = () => {

      var data = this.data;
      for (var i = 0; i < data.num; i++) {
        var entity = document.createElement('a-entity');
        entity.setAttribute('mixin', data.mixin);
        this.el.appendChild(entity);
      }
    }

    // function delay(t) {
    //    return new Promise(function(resolve) {
    //        return setTimeout(resolve, t)
    //    });
    // }
    // let a =
    setInterval(f, 5000)
    // setTimeout(clearInterval(a), 15000)
    // clearInterval(a)
    // delay(10000)
    // .then(() => {
    //   f()
    //   return delay(10000)
    // })
    // .then(() => {
    //   f()
    //   return delay(10000)
    // })
    // .then(() => {
    //   f()
    //   return delay(10000)
    // })
    // .then(() => {
    //   f()
    //   return delay(10000)
    // });
  }


});

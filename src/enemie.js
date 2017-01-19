
AFRAME.registerComponent('entity-generator', {
  schema: {
    mixin: {default: ''},
    num: {default: 10}
  },

  init: function () {


    // Create entities with supplied mixin.
    // const queue = () => {

    // };
    this.tick(5000)
  }

  tick: function (time, delta) {
    var data = this.data;
    var entity = document.createElement('a-entity');
    entity.setAttribute('mixin', data.mixin);
    this.el.appendChild(entity);
  }

    // for (var i = 0; i < data.num; i++) {
    //   queue = queue.then(() => {
    //     return setTimeout(queue, 5000)
    //   })
    // }

    // return queue();

    // Promise.resolve(setTimeout(queue, 5000))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
    //   .then(() => Promise.resolve(setTimeout(queue, 5000)))
  // }
});

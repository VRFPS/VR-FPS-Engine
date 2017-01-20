document.onkeyup = function(e){
        if(e.keyCode == 32){
          var entity = document.createElement('a-sphere');
          entity.setAttribute('radius', '0.5');
          entity.setAttribute('animation', 'property: position; dur: 3000; from: 2 2 5; to: 85 50 -20');

          let scene = document.getElementById('scene');
          scene.appendChild(entity)
        }
}


function createButton(context, func){
    var button = document.createElement('button');
    button.style.cssText = `
    background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg…28.58C245.82%2C12.34%2C233.93%2C0%2C218.19%2C0H27.27Z%22%2F%3E%3C%2Fsvg%3E) 50% 50%/70% 70% no-repeat rgba(0,0,0,.35);
    border: 0;
    bottom: 0;
    cursor: pointer;
    min-width: 50px;
    min-height: 30px;
    padding-right: 5%;
    padding-top: 4%;
    position: absolute;
    transition: background-color .05s ease;
    -webkit-transition: background-color .05s ease;
    z-index: 9999;
    left: 50px;`
    button.onclick = func;
    button.className = 'move-forward';
    context.appendChild(button);
}

window.onload = function(){
  setTimeout(() => {
    createButton(document.querySelector('.a-enter-vr'), function(){
            console.log('This is pressed')
            var press = jQuery.Event("keydown");
            press.ctrlKey = false;
            press.which = 87;
            $(window).trigger(press)
    })
  }, 2000)
}

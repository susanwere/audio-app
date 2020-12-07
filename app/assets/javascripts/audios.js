$(document).ready(function(){  
  new Clipboard('.clipboard-btn');
})

const displayIframe = (audio_src) => {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', audio_src)
  iframe.style.width = "300px"
  iframe.style.height = "300px"
  iframe.setAttribute('allowtransparency', true)
  document.body.appendChild(iframe)
}

document.addEventListener('DOMContentLoaded', function () {
  var src = document.getElementById("script_id")
  if(src){
    src = src.src.split('audio_src=')[1]
    
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
      src = src.substring(3)
      src = src.substring(0, src.length-3)
    }

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', src)
    iframe.style.width = "300px"
    iframe.style.height = "300px"
    iframe.setAttribute('allowtransparency', true)
    document.body.appendChild(iframe)
  }
});

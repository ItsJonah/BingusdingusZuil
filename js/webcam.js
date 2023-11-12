(function() {
    var video = document.getElementById('target');

    navigator.mediaDevices.getUserMedia({
        video: true, 
        audio:false
    }).then( stream => {
        video.srcObject = stream;
        video.play();
    }).catch( error => console.log(error) );
})();
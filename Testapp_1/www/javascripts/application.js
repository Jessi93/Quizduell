
// steroids.view.navigationBar.show("Hello World");


 function cameraGetPicture() {
    navigator.camera.getPicture(imageReceived, cameraFail, {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true,
      targetWidth: 600
    });
  }
  
    function imageReceived(imageURI) {
    var image = document.querySelector('img#myImage');
    image.src = imageURI;
  }

  function cameraFail(message) {
    alert("Camera error: " + message);
  }
  
  function openRundenübersicht() {
  var RundenübersichtView = new steroids.views.WebView("Rundenuebersicht.html");
  steroids.layers.push(RundenübersichtView);
  }

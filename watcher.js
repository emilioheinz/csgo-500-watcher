function monitorCrashes(className) {
  var onchange = function(element, callback) {
    var text = element.innerText;
    window.setInterval(function() {
        var newText = element.innerText;
        if(text !== newText) {
            text = newText;
            callback(element);
        }
    });
  }

  const HTMLElement = document.getElementsByClassName(className)[0]
  onchange(HTMLElement, function(element) {
    const crashValues = element.innerText.split('x')

    if(crashValues.length > 0) {
      console.log(crashValues[0])
    }
 });
}

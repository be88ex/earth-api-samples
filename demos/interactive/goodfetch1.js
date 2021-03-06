// in this sample we will attempt
// to fetch a  KML file and show it

function finished(object) {
  if (!object) {
    // wrap alerts in API callbacks and event handlers
    // in a setTimeout to prevent deadlock in some browsers
    setTimeout(function() {
      alert('Bad or null KML.');
    }, 0);
    return;
  }
  ge.getFeatures().appendChild(object);
  var la = ge.createLookAt('');
  la.set(37.77976, -122.418307, 25, ge.ALTITUDE_RELATIVE_TO_GROUND, 
         180, 60, 500);
  ge.getView().setAbstractView(la);         
}

var url = 'http://sketchup.google.com/' + 
          '3dwarehouse/download?mid=28b27372e2016cca82bddec656c63017&rtyp=k2';
google.earth.fetchKml(ge, url, finished);


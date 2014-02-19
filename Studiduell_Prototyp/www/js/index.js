function openRundenuebersicht() {
  var RundenuebersichtView = new steroids.views.WebView("html/Rundenuebersicht.html");
  steroids.layers.push(RundenuebersichtView);
}

function openNeuesSpielScreen() {
  var NeuesSpielView = new steroids.views.WebView("html/NeuesSpiel.html");
  steroids.layers.push(NeuesSpielView);
}
function openRundenuebersicht() {
  var rundenuebersichtView = new steroids.views.WebView("html/Rundenuebersicht.html");
  steroids.layers.push(rundenuebersichtView);
}

function openNeuesSpielScreen() {
  var neuesSpielView = new steroids.views.WebView("html/NeuesSpiel.html");
  steroids.layers.push(neuesSpielView);
}
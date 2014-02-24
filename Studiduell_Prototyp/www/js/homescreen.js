/*
In diesem File werden Funktionen beschrieben, die in mehr als nur einem einzigen Screen benötigt werden.
Screenspezifische Funktionen werden in den jeweiligen 'screenname.js' files beschrieben.
*/

/*Anzeige Titel*/

function openRundenuebersicht() {
  var rundenuebersichtView = new steroids.views.WebView("html/rundenuebersicht.html");
  steroids.layers.push(rundenuebersichtView);
}

function openNeuesSpielScreen() {
  var neuesSpielView = new steroids.views.WebView("html/neuesSpiel.html");
  steroids.layers.push(neuesSpielView);
}
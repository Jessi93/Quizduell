function init() {
	setKategorie();
	setFrage();
	setAntworten();
}

function setKategorie() {
	$("#kategorieDiv").text("Kategorie via JS.");
}

function setFrage() {
	$("#frageDiv").text("Frage via JS.");
}

function setAntworten() {
	$("#antwort1").text("Antwort via JS.");
	$("#antwort2").text("Antwort via JS.");
	$("#antwort3").text("Antwort via JS.");
	$("#antwort4").text("Antwort via JS.");
}

function markiereAntwort(button) {
	var btn = $(button);
	if (!btn.hasClass("buttonAusgewaehlt")) {
	// Der Button wird ausgewählt
		btn.addClass("buttonAusgewaehlt");
		btn.addClass("buttonRand");
 	}else {
	// Button wird abgewählt
		btn.removeClass("buttonAusgewaehlt");
		btn.removeClass("buttonRand");
	}
}

//Ermittelt den Wahrheitsgehalt einer Antwort 
function getWahrheitsgehalt(antwort) {
//TODO 
/*if (antwort.getWahrheit){
return true;
}
else{
return false;
}
*/
//test
switch (antwort) {
  case "antwort1":
    return true;
    break;
  case "antwort2":
	return true;
    break;
  case "antwort3":
	return false;
    break;
  case "antwort4":
	return true;
    break;
}

//Antworten werden auf Richtigkeit ueberprueft und die Buttons werden dem entsprechend markiert
function vergleicheAntworten(button) {
var btn = $(button);
if (getWahrheitsgehalt(btn)){
btn.addClass("buttonRichtig");
}
else if (btn.hasClass("buttonAusgewaehlt") &&  !getWahrheitsgehalt(btn)) {
btn.addClass("buttonFalsch");
}
else{
}
btn.addClass("antwortGegner");
}

var buttonWeiterZaehler = 1;
var fragenZaehler = 1;

/* function weiter() {
  switch (buttonWeiterZaehler) {
  case "1":
    // vergleicheAntworten 4x
	buttonWeiterZaehler = 2;
    break;
  case "2":
	if (fragenZaehler <= 3){
    var newView = new steroids.views.WebView("html/Frage.html");
	steroids.layers.push(newView);
	buttonWeiterZaehler = 1;
	fragenZaehler = fragenZaehler + 1;
	}
	else{
	var newView = new steroids.views.WebView("html/Rundenuebersicht.html");
	steroids.layers.push(newView);
	fragenZaehler = 1;
	}
    break;
	}
  } */
  
//Weiterleitung
function weiter() {
if (buttonWeiterZaehler = 1){
vergleicheAntworten(document.getElementById("antwort1"));
vergleicheAntworten(document.getElementById("antwort2"));
vergleicheAntworten(document.getElementById("antwort3"));
vergleicheAntworten(document.getElementById("antwort4"));
buttonWeiterZaehler = 2;
}
elseif ((buttonWeiterZaehler = 2) && (fragenZaehler <= 3){
var newView = new steroids.views.WebView("html/Frage.html");
steroids.layers.push(newView);

buttonWeiterZaehler = 1;
fragenZaehler = fragenZaehler + 1;
}
else {
var newView = new steroids.views.WebView("html/Rundenuebersicht.html");
steroids.layers.push(newView);
fragenZaehler = 1;
}
}


document.addEventListener("deviceready", init, false);
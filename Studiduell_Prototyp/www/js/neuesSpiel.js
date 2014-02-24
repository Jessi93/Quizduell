function init() {
	getFriendslist();
}

function getFriendslist() {
	/* 	1. hole die Freundesliste des Users vom Server
		2. füge dem html Dokument für jeden user in der Freundesliste einen Eintrag "Freund" hinzu.
	*/
}

function test() {
	steroids.view.navigationBar.show("Titel geändert!");
}

function spielerSuchenSeite() {
	var SpielerSuchenView = new steroids.views.WebView("html/spielerSuchen.html");
	steroids.layers.push(SpielerSuchenView);
}

function starteSpielBeliebigerGegner() {
/* TODO: Server überprüft, ob ein passendes Spiel bereits offen ist 
--> füge Spieler hinzu 
--> beim laden des homescreens wird das Spiel angezeigt! 

Wenn kein passendes Spiel vorhanden ist, starte ein neues Spiel gegen "Unbekannt"
--> beim laden des homescreens wird das Spiel angezeigt!*/

	var homeScreenView = new steroids.views.WebView("html/home.html");
	steroids.layers.push(homeScreenView);
}

document.addEventListener("deviceready", init, false);
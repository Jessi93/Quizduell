function init() {
	//setKategorien();
	
}

function setKategorien() {
	$("#kategorie1").text("Kategorie via JS.");
	$("#kategorie2").text("Kategorie via JS.");
	$("#kategorie3").text("Kategorie via JS.");
}




function kategorieauswaehlen(kategorie) {
	var kat = $(kategorie);
	//TODO Speicherung der Kategorie
	var newView = new steroids.views.WebView("html/ausgewaehlteKategorie.html");
	steroids.layers.push(newView);
}

document.addEventListener("deviceready", init, false);
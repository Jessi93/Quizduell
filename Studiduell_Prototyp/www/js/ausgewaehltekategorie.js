function starteSpiel(kategorie) {
	var kat = $(kategorie);
	var newView = new steroids.views.WebView("html/Frage.html");
	steroids.layers.push(newView);
}
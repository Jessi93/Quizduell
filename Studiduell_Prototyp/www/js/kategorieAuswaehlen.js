function ausgewaehlteKategorie(kategorie) {
	var kat = $(kategorie);
	var newView = new steroids.views.WebView("html/ausgewaehlteKategorie.html");
	steroids.layers.push(newView);
}


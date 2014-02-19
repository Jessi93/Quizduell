function ausgewaehlteKategorie(kategorie) {
	var kat = $(kategorie);
	var newView = new steroids.views.WebView("html/AusgewaehlteKategorie.html");
	steroids.layers.push(newView);
}


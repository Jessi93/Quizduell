function ausgewaehlteKategorie(kategorie) {
	var kat = $(kategorie);
	var newView = new steroids.views.WebView("html/Ausgewaehltekategorie.html");
	steroids.layers.push(newView);
}


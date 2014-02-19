function init() {
	setKategorie();
	setFrage();
}

function setKategorie() {
	$("#kategorieDiv").text("Kategorie via JS.");
}

function setFrage() {
	$("#frageDiv").text("Frage via JS.");
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

document.addEventListener("deviceready", init, false);
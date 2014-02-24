function init() {
	
}

function test() {
	steroids.view.navigationBar.show("Titel geändert!");
}

function spielerSuchen() {

	alert("Spieler Suchen augerufen!");
	/* TODO: Server nach Username fragen - Username kann wie folgt ausgelesen werden!*/
	alert($("#search_username_input").val());
	/* Ergebnisliste befüllen (ID = Ergebnisliste_div)*/
	
	/* Zeige Ergebnisliste an*/
	$("#ergebnislisteDiv").css("visibility","visible");
  }
 

document.addEventListener("deviceready", init, false);
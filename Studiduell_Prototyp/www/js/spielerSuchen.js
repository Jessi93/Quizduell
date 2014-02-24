function init() {
	
}

function test() {
steroids.view.navigationBar.show("Titel geändert!");
}

function SpielerSuchen() {

	alert("Spieler Suchen augerufen!");
	/* TODO: Server nach Username fragen - Username kann wie folgt ausgelesen werden!*/
	alert($("#search_username_input").val());
	/* Ergebnisliste befüllen (ID = Ergebnisliste_div)*/
	
	/* Zeige Ergebnisliste an*/
	document.getElementById('Ergebnisliste_div').style.visibility="visible";
  }
 

document.addEventListener("deviceready", init, false);
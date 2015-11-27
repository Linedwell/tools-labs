function lastUpdate() {
	lu = document.getElementById("lastmod")
	weekday = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
	months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

	var d = new Date();
	(d.getFullYear());

	var theDate = new Date(document.lastModified); 
	with (theDate) { 
		pad = "";
		if (getMinutes() < 10) { pad = "0" }
		lu.innerHTML = "<i>Dernière modification de cette page le "+weekday[getDay()]+' '+getDate()+' '+months[getMonth()]+' '+getFullYear()+' à '+ getHours()+':'+ pad + getMinutes()+"</i><br/>"
	} 
}
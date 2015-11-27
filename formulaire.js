function print(text) {
}

support = new Array();
support['Chine'] = 'manhua'
support['Corée du nord'] = 'manhwa'
support['Corée du sud'] = 'manhwa'
support['France'] = 'manfra'
support['Japon'] = 'manga'

introMapping = new Array();
introMapping['série'] = "''[[anime]]''"
introMapping['film'] = '[[film d\'animation]]'
introMapping['OAV'] = '[[Original Video Animation|OAV]]'
introMapping['ONA'] = '[[Original Net Animation|ONA]]'
introMapping['one shot'] = "''[[One shot (bande dessinée)|one shot]]''"
introMapping['roman'] = "[[Roman (littérature)|roman]]"
introMapping['nouvelle'] = "[[nouvelle]]"
introMapping['light novel'] = "[[light novel]]"
introMapping['Chine'] = 'chinois'
introMapping['Corée du nord'] = 'coréen'
introMapping['Corée du sud'] = 'coréen'
introMapping['France'] = 'français'
introMapping['Japon'] = 'japonais'
introMapping['manfra'] = "[[manfra]]"
introMapping['manga'] = "[[manga]]"
introMapping['manhua'] = "[[manhua]]"
introMapping['manhwa'] = "[[manhwa]]"
introMapping['josei'] = "''[[jōsei]]''"
introMapping['jōsei'] = "''[[jōsei]]''"
introMapping['kodomo'] = "''[[kodomo]]''"
introMapping['redikomi'] = "''[[jōsei]]''"
introMapping['seinen'] = "''[[seinen]]''"
introMapping['shojo'] = "''[[shōjo]]''"
introMapping['shōjo'] = "''[[shōjo]]''"
introMapping['shonen'] = "''[[shōnen]]''"
introMapping['shōnen'] = "''[[shōnen]]''"
introMapping['sunjeong'] = "''[[sunjeong]]''"
introMapping['sunjong'] = "''[[sunjong]]''"

categoryMapping = new Array();
/* types */
categoryMapping['josei'] = '[[Catégorie:Jōsei manga]]'
categoryMapping['jōsei'] = '[[Catégorie:Jōsei manga]]'
categoryMapping['kodomo'] = '[[Catégorie:Kodomo manga]]'
categoryMapping['redikomi'] = '[[Catégorie:Jōsei manga]]'
categoryMapping['seinen'] = '[[Catégorie:Seinen manga]]'
categoryMapping['shojo'] = '[[Catégorie:Shōjo manga]]'
categoryMapping['shōjo'] = '[[Catégorie:Shōjo manga]]'
categoryMapping['shonen'] = '[[Catégorie:Shōnen manga]]'
categoryMapping['shōnen'] = '[[Catégorie:Shōnen manga]]'

/* formats + origines */
/** manga **/
categoryMapping['bd'] = new Array();
categoryMapping['bd']['chine'] = '[[Catégorie:Série manhua]]'
categoryMapping['bd']['corée du nord'] = '[[Catégorie:Série manhwa]]'
categoryMapping['bd']['corée du sud'] = '[[Catégorie:Série manhwa]]'
categoryMapping['bd']['france'] = '[[Catégorie:Série manfra]]'
categoryMapping['bd']['japon'] = '[[Catégorie:Série manga]]'

categoryMapping['one shot'] = new Array();
categoryMapping['one shot']['chine'] = '[[Catégorie:One shot manhua]]'
categoryMapping['one shot']['corée du nord'] = '[[Catégorie:One shot manhwa]]'
categoryMapping['one shot']['corée du sud'] = '[[Catégorie:One shot manhwa]]'
categoryMapping['one shot']['france'] = '[[Catégorie:One shot]]'
categoryMapping['one shot']['japon'] = '[[Catégorie:One shot manga]]'

categoryMapping['roman'] = new Array();
categoryMapping['roman']['chine'] = '[[Catégorie:Roman chinois]]'
categoryMapping['roman']['corée du nord'] = '[[Catégorie:Roman coréen]]'
categoryMapping['roman']['corée du sud'] = '[[Catégorie:Roman coréen]]'
categoryMapping['roman']['france'] = '[[Catégorie:Roman français]]'
categoryMapping['roman']['japon'] = '[[Catégorie:Roman japonais]]'

categoryMapping['nouvelle'] = new Array();
categoryMapping['nouvelle']['chine'] = '[[Catégorie:Nouvelle chinoise]]'
categoryMapping['nouvelle']['corée du nord'] = '[[Catégorie:Nouvelle coréenne]]'
categoryMapping['nouvelle']['corée du sud'] = '[[Catégorie:Nouvelle coréenne]]'
categoryMapping['nouvelle']['france'] = '[[Catégorie:Nouvelle française]]'
categoryMapping['nouvelle']['japon'] = '[[Catégorie:Nouvelle japonaise]]'

categoryMapping['light novel'] = '[[Catégorie:Light novel]]'

/** anime **/
categoryMapping['série'] = new Array();

categoryMapping['série']['chine'] = '[[Catégorie:Série d\'animation chinoise]]'
categoryMapping['série']['corée du nord'] = '[[Catégorie:Série d\'animation coréenne]]'
categoryMapping['série']['corée du sud'] = '[[Catégorie:Série d\'animation coréenne]]'
categoryMapping['série']['france'] = '[[Catégorie:Série d\'animation française]]'
categoryMapping['série']['japon'] = '[[Catégorie:Série d\'animation japonaise]]'

categoryMapping['film'] = new Array();
categoryMapping['film']['chine'] = '[[Catégorie:Film d\'animation chinois]]'
categoryMapping['film']['corée du nord'] = '[[Catégorie:Film d\'animation nord-coréen]]'
categoryMapping['film']['corée du sud'] = '[[Catégorie:Film d\'animation sud-coréen]]'
categoryMapping['film']['france'] = '[[Catégorie:Film d\'animation français]]'
categoryMapping['film']['japon'] = '[[Catégorie:Film d\'animation japonais]]'

categoryMapping['oav'] = '[[Catégorie:Original Video Animation]]'
categoryMapping['ona'] = '[[Catégorie:Original Net Animation]]'



sectionMapping = new Array();

sectionMapping['Synopsis'] = "== Synopsis ==<br/>{{...}}"
sectionMapping['Personnages principaux'] = "== Personnages principaux ==<br/>{{...}}"
sectionMapping['Liste des chapitres'] = "== Liste des chapitres ==<br/>{{...}}"
sectionMapping['Liste des épisodes'] = "== Liste des épisodes ==<br/>{{...}}"
sectionMapping['Notes et références'] = "== Notes et références ==<br/>{{Références}}"
sectionMapping['Liens externes'] = "== Liens externes ==<br/>{{...}}"

moduleMapping = new Array();
moduleMapping['moduleManga'] = "{{Infobox Animation et bande dessinée asiatiques/Livre<br/>"
			+" | titre		   = <!-- facultatif --><br/>"
			+" | format		  = bd<br/>"
			+" | origine		 = Japon<br/>"
			+" | type			= <!-- facultatif --><br/>"
			+" | auteur		  = <!-- facultatif --><br/>"
			+" | dessinateur	 = <!-- facultatif --><br/>"
			+" | éditeur		 = <!-- facultatif --><br/>"
			+" | éditeur_francophone   = <!-- facultatif --><br/>"
			+" | prépublié	   = <!-- facultatif --><br/>"
			+" | premier_volume  = <!-- facultatif --><br/>"
			+" | dernier_volume  = <!-- facultatif, s'affiche uniquement si premier_volume est entré --><br/>"
			+" | one_shot_sortie = <!-- facultatif --><br/>"
			+" | nb_volumes	  = <!-- facultatif --><br/>"
			+" | liste_volumes   = <!-- facultatif, s'affiche uniquement si nb_volumes est entré --><br/>"
			+"}}<br/>"
			
moduleMapping['moduleAnime'] = "{{Infobox Animation et bande dessinée asiatiques/Vidéo<br/>"
			+" | titre		   = <!-- facultatif --><br/>"
			+" | format		  = série<br/>"
			+" | origine		 = Japon<br/>"
			+" | type			= <!-- facultatif --><br/>"
			+" | réalisateur1	= <!-- facultatif --><br/>"
			+" | producteur1	 = <!-- facultatif --><br/>"
			+" | scénariste1	 = <!-- facultatif --><br/>"
			+" | studio		  = <!-- facultatif --><br/>"
			+" | compositeur1	= <!-- facultatif --><br/>"
			+" | musique		 = <!-- facultatif --><br/>"
			+" | licence		 = <!-- facultatif --><br/>"
			+" | autre_licence   = <!-- facultatif --><br/>"
			+" | chaine		  = <!-- facultatif --><br/>"
			+" | autre_chaine	= <!-- facultatif --><br/>"
			+" | durée		   = <!-- facultatif --><br/>"
			+" | date_sortie	 = <!-- facultatif --><br/>"
			+" | début_diffusion = <!-- facultatif --><br/>"
			+" | fin_diffusion   = <!-- facultatif --><br/>"
			+" | nb_épisodes	 = <!-- facultatif --><br/>"
			+" | liste_épisodes  = <!-- facultatif --><br/>"
			+"}}<br/>"


/** Pour des problèmes de portabilité avec certaines implémentations de
 * JavaScript : indexOf pour un Array n'est pas toujour présent
 */
function indexOf(array, value) {
	for (i=0; i < array.length; i++) {
		if (array[i] == value) return i;
	}
	return -1;
}

/** Pour des problèmes de portabilité avec certaines implémentations de
 *  Javascript : getElementByClassName n'est pas toujours présent
 */

function getElementsByClassName(clsName) {
	alert("!")
	var retVal = new Array();
	var elements = document.getElementsByTagName("*");
	for(var i = 0;i < elements.length;i++){
		if(elements[i].className.indexOf(" ") >= 0){
			var classes = elements[i].className.split(" ");
			for(var j = 0;j < classes.length;j++){
				if(classes[j] == clsName)
					retVal.push(elements[i]);
			}
		}
		else if(elements[i].className == clsName)
			retVal.push(elements[i]);
	}
	return retVal;
}


/* Permet de forcer certains champs de saisie à débuter par une majuscule et force le reste en majuscule */
function initialCap(field) {
   field.value = field.value.substr(0, 1).toUpperCase() + field.value.substr(1).toLowerCase();
}

/* permet de sélectionner tout le texte contenu dans un element donné (dans le cas présent la fonction est appellée quand on clique dans le champs de code wiki) */
function fnSelect(objId) {
   fnDeSelect();
   if (document.selection) 
   {
	  var range = document.body.createTextRange();
	  range.moveToElementText(document.getElementById(objId));
	  range.select();
   }
   else if (window.getSelection) 
   {
	  var range = document.createRange();
	  range.selectNode(document.getElementById(objId));
	  window.getSelection().addRange(range);
   }
}
function fnDeSelect() 
{
   if (document.selection)
			 document.selection.empty();
   else if (window.getSelection)
			  window.getSelection().removeAllRanges();
} 

function ClassCompute() {

	this.init = function() {
		this.form = getCheckedRadio("formRadio")
		this.titre = "";
		this.titreKanji = "";
		this.titreRomaji = "";
		this.type = "";
		this.genre = "";
		this.auteur = "";
		this.dessinateur = "";
		this.origine = "";
		this.format = "";
		this.editeur = "";
		this.editeurFr = "";
		
		this.realisateurs = new Array();
		this.producteurs = new Array();
		this.scenaristes = new Array();
		this.compositeurs = new Array();
		this.studio = "";
		this.musique = "";
		this.licence = "";
		this.autresLicences = new Array();
		this.chaine = "";
		this.autresChaines = new Array();
		this.duree = "";
		
		this.prepublie = "";
		this.premierChapitre = null;
		this.dernierChapitre = null;
		this.sortieOneShot = null;
		this.nombreVolumes = "";
		this.listeVolumes = "";
		
		this.module = new Array();
		this.section = new Array();
	}
	
	/* setters */
	
	this.setTitre = function(name, triCategorie) {
		this.titre = name;
		this.triCategorie = triCategorie
		if (name == triCategorie) this.triCategorie = ''
	}
	
	this.setTitreKanji = function(titre) {
		this.titreKanji = titre;
	}
	
	this.setTitreRomaji = function(titre) {
		this.titreRomaji = titre;
	}
	
	this.setType = function(titre) {
		this.type = titre;
	}

	this.setGenre = function(genre) {
		this.genre = genre;
	}

	
	this.setAuteur = function(name) {
		this.auteur = name;
	}
	
	this.setDessinateur = function(name) {
		this.dessinateur = name;
	}
	
	this.setOrigine = function(origine) {
		this.origine = origine;
	}
	
	this.setFormat = function(format) {
		this.format = format;
	}
	
	this.setEditeur = function(name) {
		this.editeur = name;
	}
	
	this.setEditeurFr = function(name) {
		this.editeurFr = name;
	}
	
	this.setPrepublie = function(name) {
		this.prepublie = name;
	}		
			
	this.addRealisateur = function(name) {
		this.realisateurs.push(name);
	}
	
	this.addProducteur = function(name) {
		this.producteurs.push(name);
	}
	
	this.addScenariste = function(name) {
		this.scenaristes.push(name);
	}
	
	this.addCompositeur = function(name) {
		this.compositeurs.push(name);
	}
	
	this.setStudio = function(name) {
		this.studio = name;
	}
	
	this.setMusique = function(name) {
		this.musique = name;
	}
	
	this.setLicence = function(name) {
		this.licence = name;
	}
	
	this.addAutreLicence = function(pays,name) {
		this.autresLicences.push(new Array(pays,name));
	}

	this.setChaine = function(name) {
		this.chaine = name;
	}		
	
	this.addAutreChaine = function(pays,name) {
		this.autresChaines.push(new Array(pays,name));
	}
	
	this.setDuree = function(dur) {
		this.duree = dur;
	}
	
	this.setPremierChapitre = function(jour, mois, annee) {
		this.premierChapitre = new Array(jour, mois, annee);
	}
	
	this.setDernierChapitre = function(jour, mois, annee) {
		this.dernierChapitre = new Array(jour, mois, annee);
	}
	
	this.setSortieOneShot = function(jour, mois, annee) {
		this.sortieOneShot = new Array(jour, mois, annee);
	}
	
	this.setNombreVolumes = function(nbr) {
		this.nombreVolumes = nbr;
	}
	
	this.setListeVolumes = function(liste) {
		this.listeVolumes = liste;
	}
	
	
	this.addModule = function(mod) {
		this.module.push(mod);
	}
	
	this.addSection = function(section) {
		this.section.push(section)
	}

	/* function */

	this.generateWikiInIntro = function(text) {
		trace('gen WikiInIntro : ->' + text) 
		var result = introMapping[text];
		//if (result == undefined) result = templateMapping[text];
		if (result == undefined) result = text
		trace('gen WikiInIntro : <-' + result)
		return result
	}

	this.generateWikiInCategory = function(text) {
		result = categoryMapping[text];
		if (result == undefined) result = ''
		return result
	}

	this.generateWikiInCategory2 = function(text,text2) {
		result = categoryMapping[text][text2];
		if (result == undefined) result = this.generateWikiInCategory(text)
		return result
	}

	this.generateWikiInTemplate = function(text) {
		result = templateMapping[text];
		if (result == undefined) result = text
		return result
	}

	this.wikiUpperCaseFirstChar = function(text) {
		index = 0
		if (text.charAt(0) != '[') {
			index = 0
		} else {
			pipe = text.indexOf('|')
			bracket = text.indexOf(']')
			if (pipe == -1 || bracket < pipe) {
				index = 2
			} else {
				index = pipe + 1
			}
		}
		text = text.substr(0, index) + text.charAt(index).toUpperCase() + text.substr(index + 1)
		return text	
	}
	
	this.getMappingSection = function(text) {
		result = sectionMapping[text];
		if (result == undefined) result = ''
		return result
	}
	
	this.getMappingModule = function(text) {
		result = moduleMapping[text];
		if (result == undefined) result = ''
		return result
	}
	

	this.generateImage = function(name, size, description) {
			return '« ' + name + ' »';
	}

	this.generateWikiIntro = function() {
		var result = '';
		if (this.origine == "Japon") {
			result += "{{Japonais|'''''" + this.titre +"'''''|"+ this.titreKanji + "|" + this.titreRomaji + "}} "
		}
		else if (this.origine == "Chine") {
			result += "'''''" + this.titre + "''''' ({{Chinois|c=" + this.titreKanji + "|p=" + this.titreRomaji + "}}) "
		}
		else if (this.origine == "Corée du nord" || this.origine == "Corée du sud") {
			result += "'''''" + this.titre + "''''' ({{Coréen|" + this.titreKanji +"}}) "
		}
		else { result += "'''''" + this.titre + "''''' "}
		result += " est un "
		subresult = '';
		if(this.form == "formManga") {
			if (this.format != "bd") subresult += "" + this.generateWikiInIntro(this.format) + " "
			if((this.format == "bd" || this.format == "one shot")) subresult += "" + this.generateWikiInIntro(support[this.origine]) + ""
		}
		if(this.form == "formAnime") {
			subresult += this.generateWikiInIntro(this.format) + " " + this.generateWikiInIntro(this.origine)
		}
		result += subresult;
		if(this.form == "formManga") {
			if (this.type != "") result += " de type " + this.generateWikiInIntro(this.type.toLowerCase()) + ""
			
			a = this.auteur;
			d = this.dessinateur;
			
			if (a && d && a != d) result += " écrit par [[" + a + "]] et dessiné par [[" + d + "]]. "
			else if ((a || d) || (a && d && a == d)) result += " écrit et dessiné par [[" + a + "]]. "
			else result += ". "
		}
		
		if (this.form == "formAnime") {
			r = this.realisateurs
			s = this.studio
			if(r[0]) {
				result += " réalisé par "
				subresult = ""
				for(i=0 ; i < r.length ; i++) {
					if( subresult != "" && i < r.length-1) subresult += ", "
					if( subresult != "" && i == r.length-1) subresult += " et "
					subresult +="[[" + r[i] + "]]"
				}
				result += subresult
			}
			if(s) result += " du studio [[" + s + "]]"
			result += ". "
		}				
					
		subresult = "";
		e = this.editeur;
		p = this.prepublie;
		c = this.chaine;
		
		jp = this.premierChapitre[0];
		mp = this.premierChapitre[1];
		ap = this.premierChapitre[2];
		jd = this.dernierChapitre[0];
		md = this.dernierChapitre[1];
		ad = this.dernierChapitre[2];

		jos = this.sortieOneShot[0];
		mos = this.sortieOneShot[1];
		aos = this.sortieOneShot[2];
		
		/* permet d'ajouter un qualificatif au modèle date suivant le type de formulaire */
		qualif = "";
		if(this.form == "formManga") qualif = "en bande dessinée";
		if(this.form == "formAnime") qualif = "en animation asiatique";
		
		
		dateDebut = "{{Date|"
		if (jp != '' && mp != '' && ap != '') dateDebut = "le " + dateDebut + jp
		if (mp != '' && ap != '') dateDebut += "|" + mp
		if (ap != '') dateDebut += "|" + ap + '|' + qualif + '}}'
		if (ap != '' && mp == '' && jp == '') dateDebut = "[[" + ap + " " + qualif + "|" + ap + "]]"
		if (jp == '' && mp == '' && ap == '') dateDebut = ""
		
		dateFin = "{{Date|"
		if (jd != '' && md != '' && ad != '') dateFin = "le " + dateFin + jd
		if (md != '' && ad != '') dateFin += "|" + md
		if (ad != '') dateFin += "|" + ad + '|' + qualif + '}}'
		if (ad != '' && md == '' && jd == '') dateFin = "[[" + ad + " " + qualif + "|" + ad + "]]"
		if (jd == '' && md == '' && ad == '') dateFin = ""
		
		dateSortie = "{{Date|"
		if (jos != '' && mos != '' && aos != '') dateSortie = "le " + dateSortie + jos
		if (mos != '' && aos != '') dateSortie += "|" + mos
		if (aos != '') dateSortie += "|" + aos + '|' + qualif + '}}'
		if (aos != '' && mos == '' && jos == '') dateSortie = "[[" + aos + " " + qualif + "|" + aos + "]]"
		if (jos == '' && mos == '' && aos == '') dateSortie = ""

		if(this.form == "formManga") {
		if (p || e) subresult = "Il "
		if (p && !dateFin && dateDebut) subresult += "est prépublié dans le magazine ''[[" + p + "]]'' depuis " + dateDebut
		else if (p && dateFin && dateDebut) subresult += "a été prépublié dans le magazine ''[[" + p + "]]'' entre " + dateDebut + " et " + dateFin
		else if (p && !dateDebut && !dateFin) subresult += "a été prépublié dans le magazine ''[[" + p + "]]''"
		
		if (p && dateSortie && this.format == "one shot") subresult += " " + dateSortie
		
		if (!p && e) subresult += "a été "
		if (p && e) subresult += " et "
		
		if (e) subresult += "édité par [[" + e + "]]"
		}
		
		if(this.form == "formAnime") {
			if (c || dateDebut) subresult = "Il "
			if (!dateFin && dateDebut && this.format == "série") subresult += "est diffusé depuis " + dateDebut
			else if (dateFin && dateDebut && this.format == "série") subresult += "a été diffusé entre " + dateDebut + " et " + dateFin
			if (this.format != "série" && dateSortie) subresult += "Il a été diffusé " + dateSortie
			if(c) subresult += " sur [[" + c + "]]"	
			if (c && !dateFin && !dateDebut && !dateSortie) subresult = "Il a été diffusé sur [[" + c + "]]"
			
		}
		
		if (subresult != '') subresult += ". ";
		result += subresult;
		
		return result;
	}

	this.generateWikiCategory = function() {
		var cat = new Array()
		
		/* Ne catégorise le type QUE pour les mangas */
		trace('gen category : type')
		c = this.generateWikiInCategory(this.type.toLowerCase())
		cat.push(c)

		trace('gen category : format + origine')
		c = this.generateWikiInCategory2(this.format.toLowerCase(),this.origine.toLowerCase())
		cat.push(c)

		var result = ''
		for (i in cat) {
			if (cat[i] != '') {
				result += cat[i] + '<br/>'
			}
		}

		if (this.triCategorie != '' && result != '') {
			result = '{{DEFAULTSORT:' + this.triCategorie + '}}<br/>' + result
		}
		if (result != '') {
			result = '<br/><br/>' + result
		}
		return result
	}

	this.generateWikiTemplate = function() {
		values = new Array();
		NEWLINE = '<br/>'
		
		/* titre */
		values['titre'] = this.titre
		values['titreKanji'] = this.titreKanji
		values['titreJaponais'] = this.titreRomaji
		
		/* genre */
		if(this.type == '') values['public_cible'] = ""
		if (this.form == 'formAnime') values['type'] = "animation"
		values['genre'] = this.genre
		
		/* origine */
		if (this.origine == '') this.setOrigine("Japon");
		values['origine'] = this.origine
		
		if(this.form == "formManga") {
			/* type */
			text = ""
			if (this.type) text = "[[" + this.type + "]]"
			values['public_cible'] = text
			
			/* auteur, dessinateur */
			text = ""
			if(this.auteur) text = "[[" + this.auteur +"]]"
			values['auteur'] = text
			
			text = ""
			if(this.dessinateur) text = "[[" + this.dessinateur +"]]"
			 values['dessinateur'] = text
			
			/* éditeurs */
			var text = ""
			if(this.editeur != "") text = '[[' + this.editeur + ']]'
			values['éditeur'] = text
			
			/* autres éditeurs */
			text = ""
			if(this.editeurFr != "") text = '[[' + this.editeurFr + ']]'
			values['éditeur_francophone'] = text
			
			/* prépublication */
			text = ""
			if(this.prepublie != "") text = '[[' + this.prepublie + ']]'
			values['prépublié'] = text
			
			/* format */
			if (this.format == '') this.setFormat("bd");
			values['format'] = this.format
		}
		
		if(this.form == "formAnime") {
			/* type */
			values['type'] = 'animation'
			
			/* réalisateurs */
			for (i=0 ; i<this.realisateurs.length ; i++) {
				values['réalisateur'+(i+1)] = "[[" + this.realisateurs[i] + "]]"
			}
			
			/* producteurs */
			for (i=0 ; i<this.producteurs.length ; i++) {
				values['producteur'+(i+1)] = "[[" + this.producteurs[i] + "]]"
			}				
			
			/* scénaristes */
			for (i=0 ; i<this.scenaristes.length ; i++) {
				values['scénariste'+(i+1)] = "[["+ this.scenaristes[i] + "]]"
			}
			
			/* compositeurs */
			for (i=0 ; i<this.compositeurs.length ; i++) {
				values['compositeur'+(i+1)] = "[[" + this.compositeurs[i] + "]]"

			}
			
			text = ""
			if(this.studio != '') text = "[[" + this.studio + "]]"
			values['studio'] = text
			
			text = ""
			if(this.musique != '') text = "[[" + this.musique + "]]"
			values['musique'] = text
			
			values['durée'] = this.duree
			
			/* licences */
			text = ""
			if(this.licence != '') text = "[[" + this.licence + "]]"
			values['licence'] = text
			
			text = ""
			for(i in this.autresLicences) {
				if(text != "") { text += "&lt;br /&gt;" }
				if(this.autresLicences[i][0] != '') { text += "{{Drapeau|" + this.autresLicences[i][0] + "}} " }
				text += "[[" + this.autresLicences[i][1] + "]]"					
			}
			values['autre_licence'] = text
						
			/* chaines */
			text = ""					
			if(this.chaine) text = "[[" + this.chaine + "]]"
			values['chaine'] = text
			
			text = ""
			for(i in this.autresChaines) {
				if(text != "") { text += "&lt;br /&gt;" }
				if(this.autresChaines[i][0] != '') { text += "{{Drapeau|" + this.autresChaines[i][0] + "}} " }
				text += "[[" + this.autresChaines[i][1] + "]]"					
			}
			values['autre_chaine'] = text	

			/* format */
			if (this.format == '') this.setFormat("série");
			values['format'] = this.format					
		}
		
		
		/* permet d'ajouter un qualificatif au modèle date suivant le type de formulaire */
		qualif = "";
		if(this.form == "formManga") qualif = "en bande dessinée";
		if(this.form == "formAnime") qualif = "en animation asiatique";
		
		/* premier volume, dernier volume, one shot */
		if (this.format == 'série' || this.format == 'bd') {
			text = "{{Date|"
			j = this.premierChapitre[0]
			m = this.premierChapitre[1]
			a = this.premierChapitre[2]
			if (j != '' && m != '' && a != '') text += j
			if (m != '' && a != '') text += '|' + m
			if (a != '') text += '|' + a + '|' + qualif + '}}'
			if (j == '' && m == '' && a == '') text = ""
			if (a != '' && m == '' && j == '') text = '[[' + a + ' ' + qualif + '|' + a + ']]'
			
			if(this.form == "formManga") { values['premier_volume'] = text }
			if(this.form == "formAnime") { values['début_diffusion'] = text }
			
			text = "{{Date|"
			j = this.dernierChapitre[0]
			m = this.dernierChapitre[1]
			a = this.dernierChapitre[2]
			if (j != '' && m != '' && a != '') text += j
			if (m != '' && a != '') text += '|' + m
			if (a != '') text += '|' + a + '|' + qualif + '}}'
			if (j == '' && m == '' && a == '') text = ""
			if (a != '' && m == '' && j == '') text = '[[' + a + ' ' + qualif + '|' + a + ']]'
			
			if(this.form == "formManga") { values['dernier_volume'] = text }
			if(this.form == "formAnime") { values['fin_diffusion'] = text }
		}
		
		if (this.format == 'film' || this.format == 'OAV' || this.format == 'ONA' || this.format == 'one shot') {
			text = "{{Date|"
			j = this.sortieOneShot[0]
			m = this.sortieOneShot[1]
			a = this.sortieOneShot[2]
			if (j != '' && m != '' && a != '') text += j
			if (m != '' && a != '') text += '|' + m
			if (a != '') text += '|' + a + '|' + qualif + '}}'
			if (j == '' && m == '' && a == '') text = ""
			if (a != '' && m == '' && j == '') text = a
			
			if(this.form == "formManga") { values['one_shot_sortie'] = text }
			if(this.form == "formAnime") { values['date_sortie'] = text }
			
		}
		
		/* nombre et liste de volumes */
		if (this.format == 'série' || this.format == 'bd') {
			if(this.form == "formManga") { elts = "volumes" }
			if(this.form == "formAnime") { elts = "épisodes" }
			values['nb_'+elts] = this.nombreVolumes
			values['liste_'+elts] = this.listeVolumes
		}

		/* génère le modèle */
		template = '{{Infobox Animation et bande dessinée asiatiques/Entête' + NEWLINE + ' | style entête = œuvre' + NEWLINE
		champs = new Array('titre','titreKanji','titreJaponais','genre')
		for (i in champs) {
			template += ' | ' + champs[i] + ' = ' + values[champs[i]] + NEWLINE
		}
		template += '}}' + NEWLINE
		if(this.form == "formManga") {
			template += '{{Infobox Animation et bande dessinée asiatiques/Livre' + NEWLINE + ' | titre = ' + NEWLINE
			
			champs = new Array('format', 'origine', 'public_cible', 'auteur', 'dessinateur', 'éditeur', 'éditeur_francophone', 'prépublié', 'premier_volume', 'dernier_volume', 'one_shot_sortie', 'nb_volumes', 'liste_volumes')
		}
		if(this.form == "formAnime") {
			template += '{{Infobox Animation et bande dessinée asiatiques/Vidéo' + NEWLINE + ' | titre = ' + NEWLINE
			champs = new Array('format','origine', 'type', 'réalisateur1','réalisateur2','réalisateur3','réalisateur4','réalisateur5','producteur1','producteur2','producteur3','producteur4','producteur5','scénariste1','scénariste2','scénariste3','scénariste4','scénariste5','studio','compositeur1','compositeur2','compositeur3','compositeur4','compositeur5','musique','licence','autre_licence','chaine','autre_chaine','durée','date_sortie','début_diffusion','fin_diffusion','nb_épisodes','liste_épisodes')
									
		}
		for (i in champs) {
			if (values[champs[i]] != undefined) {
				template += ' | ' + champs[i] + ' = ' + values[champs[i]] + NEWLINE
			}
		}
		template +='}}' + NEWLINE + this.generateModule() +'{{Infobox Animation et bande dessinée asiatiques/Pied' + NEWLINE +
'| style pied = œuvre}}' + NEWLINE
		
		
		return template;
	}
	

	this.generateSection = function() {
		var wiki = ''
		for (i in this.section) {
				w = this.getMappingSection(this.section[i])
				if (w != '') {
						wiki += '<br/><br/>' + w;
				}
		}
		return wiki;
	} 
	
	this.generateModule = function() {
		var wiki = ''
		for(m in this.module) {
			w = this.getMappingModule(this.module[m])
			if (w != '') {
				wiki += w;
			}
		}
		return wiki;
	}
}

function initData() {
	c = new ClassCompute();
	c.init();
	form = getCheckedRadio("formRadio")
	
	trace('init : titres, genre')
	c.setTitre(document.getElementById("formTitre").value, document.getElementById("formTriCategorie").value)
	c.setTitreKanji(document.getElementById("formTitreKanji").value)
	c.setTitreRomaji(document.getElementById("formTitreRomaji").value)
	
	c.setGenre(document.getElementById("formGenre").value)
	
	trace('init : origine, format')
	c.setOrigine(document.getElementById("formOrigine").value)
	c.setFormat(document.getElementById(form+"Format").value)


	if(form == "formManga") {
		trace('init : auteur, dessinateur')		
		c.setAuteur(document.getElementById("formMangaAuteur").value)
		c.setDessinateur(document.getElementById("formMangaDessinateur").value)	
		
		trace('init : type')
		c.setType(document.getElementById("formMangaType").value)
	
		trace('init :  éditeur')
   		c.setEditeur(document.getElementById("formMangaEditeurOriginal").value)
	
		trace('init : éditeur Fr')
		c.setEditeurFr(document.getElementById("formMangaEditeurFrancophone").value)
		
		trace('init : prépublié')
		c.setPrepublie(document.getElementById("formMangaPrepublie").value)
	
	}
	
	if(form == "formAnime") {
		trace('init : réalisateurs, producteurs, scénaristes, compositeurs')
		for (i = 1 ; i <= 5 ; i++) {
			real = document.getElementById("formAnimeRealisateur" + i).value
			prod = document.getElementById("formAnimeProducteur" + i).value
			scen = document.getElementById("formAnimeScenariste" + i).value
			comp = document.getElementById("formAnimeCompositeur" + i).value
			
			if(real != '') { c.addRealisateur(real) }
			if(prod != '') { c.addProducteur(prod) }
			if(scen != '') { c.addScenariste(scen) }
			if(comp != '') { c.addCompositeur(comp) }
			
		}
		
		trace('init : studio, musique, licence, chaîne')
		c.setStudio(document.getElementById("formAnimeStudio").value)
		c.setMusique(document.getElementById("formAnimeMusique").value)
		c.setLicence(document.getElementById("formAnimeLicence").value)
		c.setChaine(document.getElementById("formAnimeChaine").value)
					
		
		trace('init : autres licences, autres chaînes')
		for(i = 1 ; i <= 3 ; i++) {
			paysLi = document.getElementById("formAnimePaysAutreLicence"+i).value
			nomLi = document.getElementById("formAnimeAutreLicence"+i).value
			if(nomLi != '') { c.addAutreLicence(paysLi,nomLi); }
			
			
			paysCh = document.getElementById("formAnimePaysAutreChaine"+i).value
			nomCh = document.getElementById("formAnimeAutreChaine"+i).value
			if(nomCh != '') { c.addAutreChaine(paysCh,nomCh); }
			
		}
			
		trace('init : durée')
		c.setDuree(document.getElementById("formAnimeDuree").value)				
	}
	
	
	trace('init : premier (chapitre|épisode), dernier (chapitre|épisode), sortie (one shot|film|OAV)')
	jour = document.getElementById(form+"PremierJour").value
	mois = document.getElementById(form+"PremierMois").value
	annee = document.getElementById(form+"PremierAnnee").value
	c.setPremierChapitre(jour, mois, annee)
	
	jour = document.getElementById(form+"DernierJour").value
	mois = document.getElementById(form+"DernierMois").value
	annee = document.getElementById(form+"DernierAnnee").value
	c.setDernierChapitre(jour, mois, annee)
	
	jour = document.getElementById(form+"SortieJour").value
	mois = document.getElementById(form+"SortieMois").value
	annee = document.getElementById(form+"SortieAnnee").value
	c.setSortieOneShot(jour, mois, annee)
	
	trace('init : nombre de (volumes|épisodes), liste des (volumes|épisodes)')
	c.setNombreVolumes(document.getElementById(form+"Nombre").value)
	c.setListeVolumes(document.getElementById(form+"Liste").value)
	
	trace('init : modules')
	for(i = 1 ; i <= 3 ; i++) {
		module = getCheckedRadio("formModule"+i)
		if(module) c.addModule(module)
	}
	
	trace('init : section')
	var currentObject = document.getElementById("formSection")
	for (var i=0; i < currentObject.options.length; i++ ) {
		if (currentObject.options[i].selected) {
			c.addSection(currentObject.options[i].text)
			if(currentObject.options[i].text == "Liste des chapitres" || currentObject.options[i].text == "Liste des épisodes"){
				c.setListeVolumes("#" + currentObject.options[i].text)
				document.getElementById(form+"Liste").value = "#" + currentObject.options[i].text		
			}
		}
	}

	return c;
}

var debugEnabled = false;
var debugDestination = null;

function trace(text) {
	if (debugEnabled) {
		debugDestination.innerHTML = debugDestination.innerHTML + text + '<br/>'
	}
}

function debug(text) {
	// nettoyage du champ de débugage
	document.getElementById("destinationDebug").style.display = 'block';
	debugDestination = document.getElementById("destinationDebug")
	debugDestination.innerHTML = ''
	// lancement de l'opération
	debugEnabled = true;
	compute();
	debugEnabled = false;
}

function resetDestination() {
	document.getElementsByName("formRadio")[0].checked = true
	toggleForm()
	debugDestination = document.getElementById("destinationDebug")
	debugDestination.innerHTML = ''
	debugDestination.style.display = 'none';
	wikiDestination = document.getElementById("destinationWiki")
	wikiDestination.innerHTML = 'vide pour le moment'
}

function toggleForm() {
	formList = document.getElementsByName("formRadio")
	formCommon = document.getElementsByClassName("formCommon")
	for (i=0 ; i<formList.length ; i++) {
		if (formList[i].checked) { //On affiche tous les items de la classe indiquée par le radioButton
			formToShow = document.getElementsByClassName(formList[i].value)
			document.getElementById("formSection")[2+i].disabled = null
			document.getElementById("formSection")[3-i].disabled = "disabled"
			document.getElementById("formSection")[3-i].selected = null
		} else { //On masque tous les autres
			formToHide = document.getElementsByClassName(formList[i].value)			
		}
	}
	for (i=0 ; i < formCommon.length ; i++) { formCommon[i].style.display = 'table-row-group';}
	for (i=0 ; i < formToHide.length ; i++) { formToHide[i].style.display = 'none';}
	for (i=0 ; i < formToShow.length ; i++) { formToShow[i].style.display = 'table-row-group';}		
}

function getCheckedRadio(radioName) {
	radioGroup = document.getElementsByName(radioName)
	checkedRadio = ""
	for (i=0 ; i<radioGroup.length ; i++) {
		if(radioGroup[i].checked) { checkedRadio = radioGroup[i].value }
	}
	return checkedRadio
}

function uncheckRadio(radioName) {
	for (i=0 ; i<document.getElementsByName(radioName).length ; i++) {
		if(document.getElementsByName(radioName)[i].checked) { document.getElementsByName(radioName)[i].checked = null }
	}
}

function addModule(n) {
	if(getCheckedRadio("formModule"+(n-1)) || n == 1) {
		if(n == 2) document.getElementById("formModule"+(n-1)).style.display = 'table-row-group';
		document.getElementById("formModule"+n).style.display = 'table-row-group';
		document.getElementById("buttonAddModule"+(n-1)).style.display = 'none';
		if(document.getElementById("buttonRemModule"+(n-1))) document.getElementById("buttonRemModule"+(n-1)).style.display = 'none';
	}
}

function remModule(n) {
	document.getElementById("buttonAddModule"+(n-1)).style.display = 'block';
	if(document.getElementById("buttonRemModule"+(n-1))) document.getElementById("buttonRemModule"+(n-1)).style.display = 'block';
	document.getElementById("formModule"+n).style.display = 'none';
	uncheckRadio("formModule"+n);
}

function autoSort() {
	titre = document.getElementById("formTitre").value

	// vire les accents
	sort = titre
	sort = sort.replace('À', 'A')
	sort = sort.replace('Â', 'A')
	sort = sort.replace('Ä', 'A')
	sort = sort.replace('É', 'E')
	sort = sort.replace('È', 'E')
	sort = sort.replace('Ê', 'E')
	sort = sort.replace('Ë', 'E')
	sort = sort.replace('Ï', 'I')
	sort = sort.replace('Î', 'I')
	sort = sort.replace('Ô', 'O')
	sort = sort.replace('Ö', 'O')
	sort = sort.replace('Ù', 'U')
	sort = sort.replace('Û', 'U')
	sort = sort.replace('Ü', 'U')
	sort = sort.replace('Ç', 'C')
	sort = sort.replace('à', 'a')
	sort = sort.replace('â', 'a')
	sort = sort.replace('ä', 'a')
	sort = sort.replace('é', 'e')
	sort = sort.replace('è', 'e')
	sort = sort.replace('ê', 'e')
	sort = sort.replace('ë', 'e')
	sort = sort.replace('ï', 'i')
	sort = sort.replace('î', 'i')
	sort = sort.replace('ô', 'o')
	sort = sort.replace('ö', 'o')
	sort = sort.replace('ù', 'u')
	sort = sort.replace('û', 'u')
	sort = sort.replace('ü', 'u')
	sort = sort.replace('ç', 'c')

	// supprime les  "the, le, la, les, l'" initial
	if (sort.toUpperCase().indexOf('THE ') == 0) {
		sort = sort.substr(4)
	} else if (sort.toUpperCase().indexOf('LES ') == 0) {
		sort = sort.substr(4)
	} else if (sort.toUpperCase().indexOf('LA ') == 0) {
		sort = sort.substr(3)
	} else if (sort.toUpperCase().indexOf('LE ') == 0) {
		sort = sort.substr(3)
	} else if (sort.toUpperCase().indexOf('L\'') == 0) {
		sort = sort.substr(2)
	}

	// force une majuscule initiale
	sort = sort.substr(0,1).toUpperCase() + sort.substr(1)
	
	// met à jour le champ
	if (titre.toUpperCase() != sort.toUpperCase()) {
		document.getElementById("formTriCategorie").value = sort
	} else {
		document.getElementById("formTriCategorie").value = ''
	}
}

function compute() {
	data = initData()
	form = getCheckedRadio("formRadio")
	var destination = document.getElementById("destinationWiki")

	wiki = ''
	if (document.getElementById("formEbauche").checked) {
		if(form == "formManga") { 
			var supp = support[document.getElementById("formOrigine").value];
			if (supp != undefined) {
				wiki += "{{ébauche|" + supp +"}}<br/>" 
			}
			else {
				wiki += "{{ébauche|animation et bande dessinée asiatiques}}<br/>" 	
			}
		}
		if(form == "formAnime") { wiki += "{{ébauche|anime}}<br/>" }			
	}
	wiki += data.generateWikiTemplate() + '<br/>'
	wiki += data.generateWikiIntro()
	wiki += data.generateSection()
	wiki += '<br/><br/>{{Portail|Animation et bande dessinée asiatiques}}'
	wiki += data.generateWikiCategory()
	destination.innerHTML = wiki
}

function init() {
	toggleForm()
	document.getElementById("destinationDebug").style.display = 'none';
	document.getElementById("formModule1").style.display = 'none';
	document.getElementById("formModule2").style.display = 'none';
	document.getElementById("formModule3").style.display = 'none';
	if(navigator.appName == "Microsoft Internet Explorer") { document.getElementById("warnMSIE").style.display = null; }
}
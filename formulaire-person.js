function print(text) {
}

metier = new Array();
metier['Chine'] = 'manhuajia'
metier['Corée du nord'] = 'manhwaga'
metier['Corée du sud'] = 'manhwaga'
metier['France'] = 'auteur de bande dessinée'
metier['Japon'] = 'mangaka'

nation = new Array();
nation['Chine'] = '[[Chine|chinoise]]'
nation['Corée du nord'] = '[[Corée du nord|coréenne]]'
nation['Corée du sud'] = '[[Corée du sud|coréenne]]'
nation['France'] = '[[France|française]]'
nation['Japon'] = '[[japon]]aise'

lang = new Array();
lang['Chine'] = 'zh'
lang['Corée du nord'] = 'ko'
lang['Corée du sud'] = 'ko'
lang['Japon'] = 'ja'

introMapping = new Array();
introMapping['Chine'] = 'chinois'
introMapping['Corée du nord'] = 'coréen'
introMapping['Corée du sud'] = 'coréen'
introMapping['France'] = 'français'
introMapping['Japon'] = 'japonais'
introMapping['mangaka'] = "''[[mangaka]]''"
introMapping['manhuajia'] = "''[[manhuajia]]''"
introMapping['manhwaga'] = "''[[manhwaga]]''"
introMapping['auteur de bande dessinée'] = 'auteur de bande dessinée'
introMapping['seiyu'] = "''[[seiyu]]''"


categoryMapping = new Array();

/* types */
categoryMapping['mangaka'] = '[[Catégorie:Mangaka]]'
categoryMapping['manhuajia'] = '[[Catégorie:Manhuajia]]'
categoryMapping['manhwaga'] = '[[Catégorie:Manhwaga]]'
categoryMapping['auteur de bande dessinée'] = '[[Catégorie:Manfraga]]'
categoryMapping['seiyu'] = '[[Catégorie:Seiyū]]'


sectionMapping = new Array()

sectionMapping['Biographie'] = "== Biographie ==<br/>{{...}}"
sectionMapping['Œuvre'] = "== Œuvre ==<br/>{{...}}"
sectionMapping['Notes et références'] = "== Notes et références ==<br/>{{Références}}"
sectionMapping['Liens externes'] = "== Liens externes ==<br/>{{...}}"

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
		this.nom = "";
		this.pseudo = "";
		this.nomKanji = "";
		this.transcription = "";
		this.origine = "";
		this.naissance = null;
		this.mort = null;
		this.sexe = null;

		this.editeurs = new Array();
		this.maitres = new Array();
		this.disciples = new Array();
		this.oeuvres = new Array();
			
		this.section = new Array();
	}

	/* setters */

	this.setNom = function(name, triCategorie) {
		this.nom = name;
		this.triCategorie = triCategorie
		if (name == triCategorie) this.triCategorie = ''
	}
		
	this.setPseudo = function(name) {
		this.pseudo = name;
	}
	
	this.setNomKanji = function(name) {
		this.nomKanji = name;
	}

	this.setTranscription = function(name) {
		this.transcription = name;
	}

	this.setOrigine = function(origine) {
		this.origine = origine;
	}

	this.setNaissance = function(jour, mois, annee) {
		this.naissance = new Array(jour, mois, annee);
	}

	this.setMort = function(jour, mois, annee) {
		this.mort = new Array(jour, mois, annee);
	}

	this.setSexe = function(sexe) {
		this.sexe = new Boolean(sexe);
		trace(this.sexe);
	}

	this.addEditeur = function(editeur) {
		this.editeurs.push(editeur)
	}

	this.addMaitre = function(nom) {
		this.maitres.push(nom)
	}

	this.addDisciple = function(nom) {
		this.disciples.push(nom)
	}

	this.addOeuvre = function(nom) {
		this.oeuvres.push(nom)
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
		var genre ='';
		var hab ='';

		if (this.sexe == true) genre = "e";

		if (this.origine == "Japon") {
			trans = "";
			if (this.transcription != '') trans = "|" + this.transcription;
			result += "{{Japonais|'''" + this.nom + "'''|" + this.nomKanji + trans + "}} "
			hab = genre;
		}
		else if (this.origine == "Chine") {
			result += "'''" + this.nom + "''' ({{Chinois|c=" + this.nomKanji + "}}) "
			hab = genre;
		}
		else if (this.origine == "Corée du nord" || this.origine == "Corée du sud") {
			result += "'''" + this.nom + "''' ({{Coréen|" + this.nomKanji +"}}) "
			if(this.sexe == true) { hab = "ne" }
		}
		else {
			result += "'''" + this.nom + "''' "
			hab = genre;
		}
		result += " est un" + genre + " ";
		subresult = "" + this.generateWikiInIntro(metier[this.origine]) + " " + this.generateWikiInIntro(this.origine) + hab;
		
		result += subresult; 
					
		subresult = "{{Date|"
		j = this.naissance[0]
		m = this.naissance[1]
		a = this.naissance[2]
		if (j != '' && m != '' && a != '') subresult = " né" + genre + " le " + subresult + j
		if (j == '' && (m != '' || a != '')) subresult = " né" + genre + " en " + subresult
		if (m != '' && a != '') subresult += '|' + m
		if (a != '') subresult += '|' + a + '}}'
		if (j == '' && m == '' && a == '') subresult = ""
		if (a != '' && m == '' && j == '') subresult = " né" + genre + " en " + a
		if (a == '' && m != '' && j != '') subresult = " né" + genre + " un " + subresult + j + "|" + m + "}}"

		result += subresult

		subresult = "{{Date|"
		j = this.mort[0]
		m = this.mort[1]
		a = this.mort[2]
		if (j != '' && m != '' && a != '') subresult = " et décédé" + genre + " le " + subresult + j
		if (j == '' && (m != '' || a != '')) subresult = " et décédé" + genre + " en " + subresult
		if (m != '' && a != '') subresult += '|' + m
		if (a != '') subresult += '|' + a + '}}'
		if (j == '' && m == '' && a == '') subresult = ""
		if (a != '' && m == '' && j == '') subresult = " et décédé" + genre + " en " + a

		result += subresult
		result += ". "

		return result;
	}

	this.generateWikiCategory = function() {
		var cat = new Array()

		/* Ne catégorise le type QUE pour les mangas */
		trace('gen category : type')
		c = this.generateWikiInCategory(metier[this.origine])
		cat.push(c)

		trace('gen category : naissance / mort')
		an = this.naissance[2]
		am = this.mort[2]
		if(an != '') {
			c = '[[Catégorie:Naissance en ' + an + ']]'
			cat.push(c)
		}
		if(am != '') {
			c = '[[Catégorie:Décès en ' + am + ']]'
			cat.push(c)
		}



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

		/* nom et origine*/
		values['nom'] = this.nom
		values['surnom'] = this.pseudo

		if (this.origine == '') this.setOrigine("Japon");
		values['nationalité'] = nation[this.origine]

		text = ""
		if(this.origine != 'France' && this.nomKanji != '') {
			text += "{{lang|" + lang[this.origine] + "|" + this.nomKanji + "}}"
		}
		else { text += this.nomKanji }
			values['graphie originale'] = text




		/* naissance , mort */			
		j = this.naissance[0]
		m = this.naissance[1]
		a = this.naissance[2]

		am = this.mort[2]
		boolage = "non"
		if (am == '') boolage = "oui"

		text = "{{Date|"
		if (j != '' && m != '' && a != '') text = "{{Date de naissance|" + j
		if (m != '' && a != '') text += '|' + m
		if (a != '') text += '|' + a + '|en bande dessinée|age=' + boolage + '}}'
		if (j == '' && m == '' && a == '') text = ""
		if (a != '' && m == '' && j == '') text = a
		if (a == '' && m != '' && j != '') text = "{{Date|" + j + "|" + m + "}}"

		values['date de naissance'] = text

		text = "{{Date|"
		j = this.mort[0]
		m = this.mort[1]
		a = this.mort[2]

		if (j != '' && m != '' && a != '') text = "{{Date de décès|" + j
		if (m != '' && a != '') text += '|' + m
		if (a != '') text += '|' + a + '|en bande dessinée|age=oui}}'
		if (j == '' && m == '' && a == '') text = ""
		if (a != '' && m == '' && j == '') text = a
		if (a == '' && m != '' && j != '') text = "{{Date|" + j + "|" + m + "}}"

		values['date de décès'] = text

		text = ""
		for (e in this.editeurs) {
			if(text != "") { text += "&lt;br /&gt;" }
			if(this.editeurs[e] != '') { text += '[[' + this.editeurs[e] + ']]' }
		}
		values['éditeur'] = text

		/* maîtres, disciples */
		text = ""
		for(m in this.maitres) {
			if(text != "") { text += "&lt;br /&gt;" }
			if(this.maitres[m] != '') { text += '[[' + this.maitres[m] + ']]' }
		}
		values['maitres'] = text

		text = ""
		for(d in this.disciples) {
			if(text != "") { text += "&lt;br /&gt;" }
			if(this.disciples[d] != '') { text += '[[' + this.disciples[d] + ']]' }
		}
		values['élèves'] = text


		text = ""
		for(o in this.oeuvres) {
			if(text != "") { text += "&lt;br /&gt;" }
			if(this.oeuvres[o] != '') { text += '[[' + this.oeuvres[o] + ']]' }
		}
		values['œuvres principales'] = text



		/* génère le modèle */
		template = '{{Infobox Biographie/Entête' + NEWLINE + ' | entête = bd' + NEWLINE + ' | charte = ABDA' + NEWLINE
		champs = new Array('nom','surnom','graphie originale','nationalité','date de naissance','date de décès')
		for (i in champs) {
			template += ' | ' + champs[i] + ' = ' + values[champs[i]] + NEWLINE
		}
		template += '}}' + NEWLINE

		template += '{{Infobox Biographie/Auteur' + NEWLINE + ' | charte = ABDA' + NEWLINE
					
		champs = new Array('langue','genre','éditeur','maitres','élèves','œuvres principales')
				


		for (i in champs) {
			if (values[champs[i]] != undefined) {
				template += ' | ' + champs[i] + ' = ' + values[champs[i]] + NEWLINE
			}
		}
		template +='}}' + NEWLINE +'{{Infobox Biographie/Pied}}' + NEWLINE
				
				
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
}

function initData() {
	c = new ClassCompute();
	c.init(); 

	trace('init : nom, pseudo, nomKanji')
	c.setNom(document.getElementById("formAuteurNom").value, document.getElementById("formTriCategorie").value)
	c.setPseudo(document.getElementById("formAuteurPseudo").value)
	c.setNomKanji(document.getElementById("formAuteurNomKanji").value)
	c.setTranscription(document.getElementById("formAuteurTranscription").value)
	c.setOrigine(document.getElementById("formAuteurOrigine").value)
		
	trace('init : naissance , mort')
	jour = document.getElementById("formNaissanceJour").value
	mois = document.getElementById("formNaissanceMois").value
	annee = document.getElementById("formNaissanceAnnee").value
	c.setNaissance(jour, mois, annee)
		
	jour = document.getElementById("formDecesJour").value
	mois = document.getElementById("formDecesMois").value
	annee = document.getElementById("formDecesAnnee").value
	c.setMort(jour, mois, annee)
		
	c.setSexe(document.getElementsByName("formSexe")[1].checked); //On regarde si la valeur choisie est "Femme".
		

	trace('init : éditeurs')
	for (var i = 1; i <= 3; i++) {
		edit = document.getElementById("formAuteurEditeur"+i).value
		if (edit != '') { c.addEditeur(edit) }
	}

	trace('init : maitre, disciples')
	for (var i = 1; i <= 3; i++) {
		mai = document.getElementById("formAuteurMaitre"+i).value
		if (mai != '') { c.addMaitre(mai) }
	}
	for (var i = 1; i <= 3; i++) {
		disc = document.getElementById("formAuteurDisciple"+i).value
		if (disc != '') { c.addDisciple(disc) }
	}

	trace('init : nouvelle, oeuvre')
	//c.setNouvelle(document.getElementById("formAuteurNouvelle").value)
	for(var i = 1; i <= 3; i++) {
		oeu = document.getElementById("formAuteurOeuvre"+i).value
		if (oeu != '') { c.addOeuvre(oeu) }
	}


		
	trace('init : section')
	var currentObject = document.getElementById("formSection")
	for (var i=0; i < currentObject.options.length; i++ ) {
		if (currentObject.options[i].selected) {
			c.addSection(currentObject.options[i].text)
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
	debugDestination = document.getElementById("destinationDebug")
	debugDestination.innerHTML = ''
	debugDestination.style.display = 'none';
	wikiDestination = document.getElementById("destinationWiki")
	wikiDestination.innerHTML = 'vide pour le moment'
}

function getCheckedRadio(radioName) {
	radioGroup = document.getElementsByName(radioName)
	checkedRadio = "";
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
	var destination = document.getElementById("destinationWiki")

	wiki = ''
	if (document.getElementById("formAuteurEbauche").checked) {
		wiki += "{{ébauche|mangaka}}<br/>"		
	}
	wiki += data.generateWikiTemplate() + '<br/>'
	wiki += data.generateWikiIntro()
	wiki += data.generateSection()
	wiki += '<br/><br/>{{Portail|Animation et bande dessinée asiatiques}}'
	wiki += data.generateWikiCategory()
	destination.innerHTML = wiki
}

function init() {
	document.getElementById("destinationDebug").style.display = 'none';
	if(navigator.appName == "Microsoft Internet Explorer") { document.getElementById("warnMSIE").style.display = null; }
}
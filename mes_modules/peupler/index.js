"use strict";
const tableau = require('./tableaux.js');

let maxNom = tableau.nom.length
let maxPrenom = tableau.prenom.length
let maxTelephone = tableau.telephone.length
let maxVille = tableau.ville.length
let maxdomaine = tableau.domaine.length


const peupler_json = ()=>{

	let position
	let tabNoms = []
	let tabTousLesNoms = []
	for (let k=0; k<10; k++){
		tabNoms = []
		position = Math.floor(Math.random()*maxNom)
		tabNoms.push(tableau.nom[position])

		position = Math.floor(Math.random()*maxPrenom)
		tabNoms.push(tableau.prenom[position])

		position = Math.floor(Math.random()*maxTelephone)
		tabNoms.push(tableau.telephone[position])

		position = Math.floor(Math.random()*maxVille)
		tabNoms.push(tableau.ville[position])

		position = Math.floor(Math.random()*maxdomaine)
		tabNoms.push(tableau.domaine[position])

		tabTousLesNoms.push(tabNoms);
	}
	return(tabTousLesNoms)
}

module.exports = peupler_json
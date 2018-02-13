var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient
app.use(express.static('public'));
/* on associe le moteur de vue au module «ejs» */
app.set('view engine', 'ejs'); // générateur de template
var util = require("util");
 

///////////////////////////////////// route accueil
app.get('/', (req, res) => {
 console.log('la route route get / = ' + req.url)
 
 var cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){
 if (err) return console.log(err)
 console.log('util = ' + util.inspect(resultat));
 // transfert du contenu vers la vue index.ejs (renders)
 // affiche le contenu de la BD
 res.render('gabarit.ejs', {adresse: resultat})
 }) 
})

let db // variable qui contiendra le lien sur la BD



MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
	if (err) return console.log(err)
	db = database.db('carnet_adresse')
	// lancement du serveur Express sur le port 8081
	app.listen(8081, () => {
	console.log('connexion à la BD et on écoute sur le port 8081')
	})
})

app.get('/adresse', (req, res) => {
 console.log('la route route get / = ' + req.url)
 
 var cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){
 if (err) return console.log(err)
 // transfert du contenu vers la vue index.ejs (renders)
 // affiche le contenu de la BD
 res.render('gabarit.ejs', {adresse: resultat})
 }) 
})
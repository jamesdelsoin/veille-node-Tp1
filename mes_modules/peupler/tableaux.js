/*!
 * tableaux.js
 */

"use strict";


/*
On réalise cette structure

let t = {
      a : [],
      b: [],
      c: []
      }
*/






   let nom = [ 
               'Martin',
               'Marchand',
               'Trudeau',
               'Lafontaine',
               'Gravel',
               'Huberdeau',
               'Massé',
               'St-Pierre',
               'Dandurand',
               'Hamel',
               'Larose',
               'Ambroise',
               'Kuvel',
               'Lamarre',
               'Sorel',
               'Frapier',
               'Archer',
               'Dejoie',
               'Moïse',
               'Fortin',
               'Stien',
               'Gagnon',
               'Chédiac',
               'Roy',
               'Gagner',
               'Larue',
               'Lafortune',
               'Roffi',
               'Cartier',
               'Maisonneuve',
               'Levesque',
               'Talon',
               'Bellemarre',
               'Mercier'
               ]

let domaine = [
                  'hotmail.com',
                  'vedeotron.com',
                  'gmail.com',
                  'yahoo.com',
                  'cmaisonneuve.qc.ca',
                  'webfaction.com',
                  'cvsyc.com',
                  'bell.ca',
                  'umontreal.ca',
                  'skillscanada.ca',
                  'inforoutefpt.com']

let telephone = [
            '450-581-6666',
            '450-458-6947',
            '450-921-4195',
            '450-878-8361',
            '450-499-6666',
            '450-195-1492',
            '450-166-8584',
            '450-597-3614',
            '450-478-4159',
            '514-744-1245',
            '514-752-8722',
            '514-745-4521',
            '514-417-4545',
            '514-288-4546',
            '514-458-1919'
            ]

let ville = [
            'Montréal',
            'Québec',
            'Saskatshewan',
            'Calgary',
            'Edmonton',
            'Laval',
            'Ottawa',
            'Gatineau',
            'Gaspé',
            'Hudson',
            'New York'
            ]

let prenom = [
                  'Luc',
                  'Éric',
                  'François',
                  'Lyne',
                  'carolle',
                  'Sylvie',
                  'Renée',
                  'Mathieu',
                  'Eddy',
                  'Jean',
                  'Paul',
                  'Gustave',
                  'Rose-Lyne',
                  'Rose-Lise',
                  'Rose',
                  'Xavier',
                  'Olivier',
                  'Michel',
                  'Jean-François',
                  'Bob',
                  'Gil',
                  'Martin',
                  'Pierre',
                  'Maxime',
                  'Léo',
                  'Léo-Paul',
                  'Paul',
                  'Alix',
                  'Alixe',
                  'Chantal',
                  'Christelle',
                  'Katy',
                  'Johanne',
                  'Béatrice',
                  'Noémie',
                  'Coralie',
                  'Pénéloppe',
                  'Charlotte'
                    ]


module.exports.nom = nom;
module.exports.prenom = prenom;
module.exports.telephone = telephone;
module.exports.ville = ville;
module.exports.domaine = domaine;
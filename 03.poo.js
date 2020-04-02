//TP 03 - Programmation orientée objet

//------------- Fonction constructeur -------------
// Créer une fonction constructeur Personne qui permet de créer un objet ayant les caractéristiques suivantes :

function Personne (nom,prenom,pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
}

var personne1 = new Personne('Girard','Vincent','Nelfire');
console.log(personne1.getNomComplet());

//• Créer un objet jules en utilisant la fonction constructeur Personne avec :
var jules = new Personne("LEMAIRE", "Jules", "jules77");

//• Créer un objet paul en utilisant la fonction constructeur Personne avec :
var paul = new Personne("LEMAIRE", "Paul", "paul44");

//• Afficher dans la console :  
//◦ Le nom de l’objet jules.
console.log(jules.nom);

//◦ Le prénom de l’objet jules.
console.log(jules.prenom);

// ◦ Le pseudo de l’objet jules. 
console.log(jules.pseudo);

//◦ Le nom complet de l’objet jules
console.log(jules.getNomComplet());

//Répéter l’affichage précédent pour l’objet paul (créer une fonction réutilisable afficherPersonne).
function afficherPersonne(personne) {
    console.log(personne.getNomComplet());
}

//Tester.
afficherPersonne(paul);


//------------- Modifier un objet -------------
//• Modifier le pseudo de l’objet jules en jules44.

jules.pseudo = 'jules44';

//• Tester.
afficherPersonne(jules);


//------------- Ajouter une propriété à Personne -------------
//Afficher la propriété age de l’objet jules (undefined)
console.log(jules.age);

// Ajouter la propriété age à la structure Personne avec la valeur par défaut NON RENSEIGNE. ◦ Utiliser la propriété prototype.
Personne.prototype.age = "NON RENSEIGNE";

//• Afficher la propriété age de l’objet jules dans la console
console.log(jules.age);

//• Modifier l’age de l’objet jules à 30
jules.age = 30;

//• Afficher la propriété age de l’objet jules dans la console
console.log(jules.age);

//-------------Ajouter une méthode à Personne-------------

//• Ajouter la méthode getInitiales à la structure Personne qui retourne une chaine de caractères composée de la première lettre du prénom et de la première lettre du nom.
Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}

console.log(jules.getInitiales());

//------------- Objet sans fonction constructeur -------------
//Créer un objet robert sans fonction constructeur avec :
//◦ L’attribut prenom qui vaut Robert.
//◦ L’attribut nom qui vaut LEPREFET.
//◦ L’attribut pseudo qui vaut robert77.
var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
}

afficherPersonne(robert);

//------------- Héritage via une fonction constructeur -------------
//• Utiliser call avec la fonction Personne (Personne.call(…))
function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return nom + " " + prenom + " " + pseudo + " " + numeroClient;
    }
}

//• Créer un objet steve à partir de la structure Client avec :
//◦ L’attribut prenom qui vaut Steve.
//◦ L’attribut nom qui vaut LUCAS.
//◦ L’attribut pseudo qui vaut steve44.
//◦ L’attribut numeroClient qui vaut A01.
var steve = new Client("Steve", "LUCAS", "steve44", "A01");

//• Afficher dans la console les informations de l’objet steve via la fonction afficherPersonne.
afficherPersonne(steve);

//• Afficher le numéro client de l’objet steve dans la console.
console.log(steve.numeroClient);

//• Afficher dans la console le résultat de l’exécution de la fonction getInfos pour l’objet steve dansla console.
console.log(steve.getInfos());

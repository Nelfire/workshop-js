//TP 01 - Les fonctions
console.log("TP 01 - Fonctions");

//Initialisation des variables
var nombre1 = 10;
var nombre2 = 20;

//Créer une variable somme dont la valeur est une référence à la fonction additionner.
var somme = additionne(nombre1,nombre2);
console.log("resultat1 = "+somme);

// Créer une variable resultat2 dont le résultat est l’invocation de la fonction somme avec les paramètres nombre1 et nombre2. /!\ PAS SUR /!\
var resultat2 = sommeFunction(nombre1,nombre2);
console.log("resultat2 = "+resultat2);

//Créer une variable resultat3 dont le résultat est l’invocation de la fonction multiplication avec les paramètres nombre1 et nombre2.
var resultat3 = multiplication(nombre1,nombre2);
console.log("resultat3 = "+resultat3);



// ----------FONCTION------------ //
//Pas sur qu'il faille faire comme ça pour l'exo?
function sommeFunction(nb1,nb2){
  return additionne(nb1,nb2);
}

//Création fonction addition
function additionne(nombre1,nombre2) {
  var somme;
  somme = nombre1+nombre2;
  //console.log("Résultat de l'addition : "+somme)

  //Retourne la somme
  return somme;
}

//Création fonction multiplication
function multiplication(nombre1,nombre2) {
  var sommeMultiplication;
  sommeMultiplication = nombre1*nombre2;

  //Retourne la somme
  return sommeMultiplication;
}

//Fonction comme élément du 1er ordre
var afficherOperation = function (nomOperation,operation,nb1,nb2){
  console.log(nomOperation + "(" + nb1 + "," + nb2 + ") = " + operation(nb1, nb2));
}


//Invoquer la fonction afficherOperation avec les paramètres suivants (◦ la chaîne de caractères Somme; la variable somme précédemment créée; la valeur 20; la valeur 40 : )
afficherOperation("Somme", additionne, 20, 40);
afficherOperation("Multiplication", multiplication, 10, 20);
afficherOperation("Soustraction", function (nb1, nb2) { return nb1 - nb2 }, 15, 5);
//TP 02 - Tableaux

//Initialisation variable
var lettreADansToutesLesVilles = false;

//Mise en place d'un tableau de villes
var ville = new Array('nantes','paris','saint-nazaire','angers','le mans');


//A l’aide de la fonction forEach(), afficher tous les éléments du tableau dans la console
ville.forEach(element => {
    console.log(element);
});

/*
Ou méthode moche :
for(i=0;i<ville.length;i++) {
    console.log(ville[i]);
}
*/


//• A l’aide de la fonction every(), déterminer si toutes les villes de la variables villes contiennent la lettre a.
var lettreADansToutesLesVilles = function(element) {
    return element.includes("a");
}
console.log(ville.every(lettreADansToutesLesVilles)); // renvoie true si 'a' trouvé dans les ville


//• A l’aide de la fonction some(), déterminer si au moins une ville de la variables villes contient le caractère '-'.
var auMoinsUneVilleAvecUnTiret = function(element) {
    return element.includes("-");
}
console.log(ville.some(auMoinsUneVilleAvecUnTiret)); // renvoie true si 'a' trouvé dans les ville


//• A l’aide de la fonction filter(), créer une variable villesSansTiretSansEspace qui contient un tableau dont les villes n’ont ni tiret, ni espace.
var villesSansTiretSansEspace = function(element) {
  return !element.includes("-") && !element.includes(" ");
}
console.log(ville.filter(villesSansTiretSansEspace));


//• A partir du tableau villes, construire un tableau dont :
var villesMajusculeSeTerminantParS = ville.filter(function (element) {
    return element.endsWith("s");
}).map(function (element) {
    return element.toUpperCase();
});
console.log(villesMajusculeSeTerminantParS);
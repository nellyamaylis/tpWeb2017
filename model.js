
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// fonction gérant le dessin
function Drawing() {
    this.mesDessin = [];

    this.getDessins = function () {
        return this.mesDessin
    }.bind(this);

    this.addForm = function (Forme) {
        this.mesDessin.push(Forme)
    }.bind(this)

}
// Classe Forme
function Forme(epaisseur, couleur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;

    // Fonction qui retourne la couleur de la forme
    this.getCouleur = function(){
        return this.couleur;
    }.bind(this);
    // Fonction qui retourne l'épaisseur de la forme
    this.getEpaisseur = function(){
        return this.epaisseur;
    }.bind(this)
}
// classe Rectangle extends Forme
function Rectangle(positRecInX, positRecInY, largeur, hauteur, epaisseur, couleur){
    Forme.call(this, couleur, epaisseur);
    //Initialisation des propriétées
    this.positRecInX = positRecInX; // Coordonée initiale de X
    this.positRecInY = positRecInY; // Coordonnée initiale de Y
    this.largeur = largeur; // Largeur du rectangle
    this.hauteur = hauteur; // Hauteur du rectangle

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.positRecInX;
    }.bind(this);
    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.positRecInY;
    }.bind(this);
    //Fonction qui retourne la coordonnée final de X
    this.getFinalX = function(){
        return (this.positRecInX + this.largeur);
    }.bind(this);
    //Fonction qui retourne la coordonnée final de Y
    this.getFinalY = function(){
        return (this.positRecInY + this.hauteur);
    }.bind(this)
}
Rectangle.prototype = new Forme();

// Classe Line extends Forme
function Line(positInX, positInY, positOutX, positOutY, epaisseur, couleur){
    Forme.call(this, couleur, epaisseur);
    this.positInX = positInX;
    this.positInY = positInY;
    this.positOutX = positOutX;
    this.positOutY = positOutY;

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.positInX;
    }.bind(this);
    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.positInY;
    }.bind(this);
    //Fonction qui retourne la coordonnée final de X
    this.getFinalX = function(){
        return (this.positOutX);
    }.bind(this);
    //Fonction qui retourne la coordonnée final de Y
    this.getFinalY = function(){
        return (this.positOutY);
    }.bind(this)
}
Line.prototype = new Forme();
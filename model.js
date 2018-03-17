
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// fonction gérant le dessin
function Drawing() {
    this.mesDessin = new Array();

    this.getDessins = function () {
        return this.mesDessin;
    }.bind(this);

    this.addForm = function (forme) {
        this.mesDessin.push(forme);
    }.bind(this);

}
// Classe Forme
function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}
// classe Rectangle extends Forme
function Rectangle(positRecInX, positRecInY, largeur, hauteur, epaisseur, couleur){
    Forme.call(this, couleur, epaisseur);
    //Initialisation des propriétées
    this.positRecInX = positRecInX; // Coordonée initiale de X
    this.positRecInY = positRecInY; // Coordonnée initiale de Y
    this.largeur = largeur; // Largeur du rectangle
    this.hauteur = hauteur; // Hauteur du rectangle
}
Rectangle.prototype = new Forme();

// Classe Line extends Forme
function Line(positInX, positInY, positOutX, positOutY, epaisseur, couleur){
    Forme.call(this, couleur, epaisseur);
    this.positInX = positInX;
    this.positInY = positInY;
    this.positOutX = positOutX;
    this.positOutY = positOutY;
}
Line.prototype = new Forme();
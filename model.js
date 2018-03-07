
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// fonction gérant le dessin
function Drawing() {
    this.monTableau = new Array();

    this.paint = function(canvas){
        canvas.fillStyle = '#F0F0F0'; // set canvas' background color
        canvas.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
    }
};

// Classe Forme
function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
    this.paint = function(canvas){
        canvas.strokeWeight(this.epaisseur);
        canvas.strokeStyle(this.couleur);
    };

    // Fonction qui retourne la couleur de la forme
    this.getColor = function(){
        return this.couleur;
    };

};

// classe Rectangle extends Forme
function Rectangle(positRecInX, positRecInY, largeur, hauteur){
    Forme.call();
    //Initialisation des propriétées
    this.positRecInX = positRecInX; // Coordonée initiale de X
    this.positRecInY = positRecInY; // Coordonnée initiale de Y
    this.largeur = largeur; // Largeur du rectangle
    this.hauteur = hauteur; // Hauteur du rectangle

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.positRecInX;
    }
    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.positRecInY;
    }
    //Fonction qui retourne la coordonnée final de X
    this.getFinalX = function(){
        return (this.positRecInX + this.largeur);
    }
    //Fonction qui retourne la coordonnée final de Y
    this.getFinalY = function(){
        return (this.positRecInY + this.hauteur);
    }
};

// Classe Line extends Forme
function Line(positInX, positInY, positOutX, positOutY){
    Forme.call();
    this.positInX = positInX;
    this.positInY = positInY;
    this.positOutX = positOutX;
    this.positOutY = positOutY;
};
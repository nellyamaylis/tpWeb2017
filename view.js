
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    // Manager color
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.rect(this.positRecInX, this.positRecInY, this.largeur, this.hauteur);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    // Manager color

    ctx.beginPath();
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    console.log("Données à verifier : epaisseur : " + this.lineWidth + " et couleur " + this.strokeStyle);
    ctx.moveTo(this.positInX, this.positInY);
    ctx.lineTo(this.positOutX, this.positOutY);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    console.log(this.getDessins());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getDessins().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};



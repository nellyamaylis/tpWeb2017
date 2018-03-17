// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
};

Rectangle.prototype.paint = function (ctx) {
    // Manager color
    Forme.prototype.paint.call(this, ctx);
    ctx.rect(this.positRecInX, this.positRecInY, this.largeur, this.hauteur);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    // Manager color
    Forme.prototype.paint.call(this, ctx);
    ctx.moveTo(this.positInX, this.positInY);
    ctx.lineTo(this.positOutX, this.positOutY);
    ctx.stroke();
};


Drawing.prototype.paint = function (ctx) {
    console.log(this.getDessins());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getDessins().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
    this.updateShapeList();
    console.log("nombre d'elements:" +this.getDessins().length);
};

Drawing.prototype.updateShapeList = function () {
    var myFormeList = document.getElementById('shapeList');
    myFormeList.innerHTML ="";

    this.getDessins().forEach(function (eltDuTableau) {
        // now fill the canvas

        if (eltDuTableau.positInX) {
            myFormeList.innerHTML += "<li>" +
                "Ligne allant du point  X(" + eltDuTableau.positInX + "," + eltDuTableau.positInY + " ) au point Y(" + eltDuTableau.positOutX + "," + eltDuTableau.positOutY + " )" + "</li>";
        }else {
            myFormeList.innerHTML += "<li>" +
                "Rectangle de dimensions : (" + eltDuTableau.positRecInX + "," + eltDuTableau.positRecInY + " ) et (" + eltDuTableau.largeur + "," + eltDuTableau.hauteur + " )" + "</li>";
        }
        eltDuTableau.paint(ctx);
    });
};
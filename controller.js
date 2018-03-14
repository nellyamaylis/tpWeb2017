
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);
    var butRect = document.getElementById('butRect');
    var butLine = document.getElementById('butLine');
    var spinner = document.getElementById('spinnerWidth');
    var colour = document.getElementById('colour');


    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    // Fonction onInteractionStart
    this.onInteractionStart = function(dnd) {
        this.currLineWidth = spinner.value;
        this.currColour = colour.value;
        //Choix du mode d'edition
        if(butRect.checked) {
            this.currEditingMode = editingMode.rect
        } else if (butLine.checked){
            this.currEditingMode = editingMode.line
        }
        //Changement de la forme et création de la forme
        switch (this.currEditingMode){
            case editingMode.line: {
                this.currentShape = new Line(DnD.getInitX, DnD.getInitY, DnD.getFinalX, DnD.getFinalY, this.currLineWidth, this.currColour);
                break
            }
            case editingMode.rect: {
                this.currentShape = new Rectangle(DnD.getInitX, DnD.getInitY, DnD.height, DnD.width, this.currLineWidth, this.currColour);
                break
            }
        }
        console.log("Données start : epaisseur : " + this.currLineWidth + " et couleur " + this.currColour + " et mode edition " + this.currEditingMode);
    }.bind(this);


    // Fonction onInteractionUpdate
    this.onInteractionUpdate = function(dnd){
        if(butLine.checked){
            //Line
            this.currentShape = new Line(dnd.getInitX, dnd.getInitY, dnd.getFinalX, dnd.getFinalY, this.currLineWidth, this.currColour)
        } else if(butRect.checked){
            //Rectangle
            this.currentShape = new Rectangle(dnd.getInitX, dnd.getInitY, dnd.height, dnd.width, this.currLineWidth, this.currColour)
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx)
        console.log("Données update : epaisseur : " + this.currLineWidth + " et couleur " + this.currColour + " et mode edition " + this.currEditingMode);
    }.bind(this);


    // Fonction onInteractionEnd
    this.onInteractionEnd = function(dnd){
        if(butLine.checked){
            //Line
            this.currentShape = new Line(dnd.getInitX, dnd.getInitY, dnd.getFinalX, dnd.getFinalY, this.currLineWidth, this.currColour)
        } else if(butRect.checked){
            //Rectangle
            this.currentShape = new Rectangle(dnd.getInitX, dnd.getInitY, dnd.height, dnd.width, this.currLineWidth, this.currColour)
        }
        drawing.addForm(this.currentShape);
        drawing.paint(ctx, canvas)
        console.log("Données finale : epaisseur : " + this.currLineWidth + " et couleur " + this.currColour + " et mode edition " + this.currEditingMode);
    }.bind(this)

}


